import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Movie } from "./Movie";
import { GetMovie } from "./MovieService";

export default function MoviePage() {
    const [movie, setData] = useState<Movie>({id:"", title:""});

    let params = useParams();
    let movieId = params.movieId!;

    useEffect(() => {
        const fetchData = async () => {
            setData(await GetMovie(movieId));
        }

        fetchData().catch(console.error);
    }, [])

    return (
        <div>
            <div data-testid='movie-id'>Id: {movie.id}</div>
            <div>Title: {movie.title}</div>
        </div>
    );
}
