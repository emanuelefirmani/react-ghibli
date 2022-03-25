import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetMovie } from "./MovieService";

export default function MoviePage() {
    const [movie, setData] = useState<any>([]);

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
            The movie '{movieId}':<br />
            Id: {movie.id}<br />
            Title: {movie.title}
        </div>
    );
}
