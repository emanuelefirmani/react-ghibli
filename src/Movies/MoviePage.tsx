import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetMovie } from "./MovieService";

export default function MoviePage() {
    const [movie, setData] = useState<any>([]);

    let params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setData(await GetMovie('578ae244-7750-4d9f-867b-f3cd3d6fecf4'));
        }

        fetchData().catch(console.error);
    }, [])

    let movieId = params.movieId;
    return (
        <div>
            The movie '{movieId}':<br />
            Id: {movie.id}<br />
            Title: {movie.title}
        </div>
    );
}
