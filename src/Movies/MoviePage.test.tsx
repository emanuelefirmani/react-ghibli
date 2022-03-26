import { render, waitFor } from '@testing-library/react';
import { Movie, MovieId } from './Movie';
import MoviePage from './MoviePage';

jest.mock("./MovieService", () => ({
    GetMovie: async (movieId: MovieId) => new Promise<Movie>((resolve) => resolve({id: "some-" + movieId, title: "some title"}))
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