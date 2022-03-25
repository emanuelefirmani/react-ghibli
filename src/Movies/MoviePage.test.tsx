import { render, screen, waitFor } from '@testing-library/react';
import MoviePage from './MoviePage';

jest.mock("./MovieService", () => ({
    GetMovie: async (movieId: string) => new Promise((resolve) => resolve({id: "some-" + movieId, title: "some title"}))
}));

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      movieId: 'mId'
    }),
    useRouteMatch: () => ({ url: '/movies/mId' }),
}));

test('renders movie', async () => {
    const { getByText } = render(<MoviePage />);

    await waitFor(() => {
        const content = getByText(/Id: .*some-mId.*Title: .*some title/);
        expect(content).toBeInTheDocument();
    });
});