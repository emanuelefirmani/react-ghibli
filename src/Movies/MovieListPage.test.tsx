import { render, waitFor } from '@testing-library/react';
import { Movies } from './Movie';
import MovieListPage from './MovieListPage';

jest.mock("./MovieService", () => ({
    GetMovies: async () => new Promise<Movies>((resolve) => resolve([
            {id: "id 1", title: "title 1"},
            {id: "id 2", title: "title 2"},
            {id: "id 3", title: "title 3"}
        ]))
    }));

test('renders movie', async () => {
    const { getByText } = render(<MovieListPage />);

    await waitFor(() => {
        const contentId = getByText("id 1");
        expect(contentId).toBeInTheDocument();
        const contentTitle = getByText("title 1");
        expect(contentTitle).toBeInTheDocument();
    });
});