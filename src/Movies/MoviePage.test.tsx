import { render, screen, waitFor } from '@testing-library/react';
import MoviePage from './MoviePage';

jest.mock("./MovieService", () => ({
    GetMovie: async () => new Promise((resolve) => resolve({id: "some id", title: "some title"}))
  }));

test('renders movie', async () => {
    const { getByText } = render(<MoviePage />);

    await waitFor(() => {
        const content = getByText(/Id: .*some id.*Title: .*some title/);
        expect(content).toBeInTheDocument();
    });
});