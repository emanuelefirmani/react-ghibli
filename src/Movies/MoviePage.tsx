import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function MoviePage() {
    const [movie, setData] = useState<any>([]);

    let params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4")
            var movie = await response.json();

            setData(movie);
            }

        console.log('1');
        fetchData().catch(console.error);
        console.log('2');
    }, [])
    console.log('3');

    let movieId = params.movieId;
    return (
        <div>
            The movie '{movieId}':<br />
            Id: {movie.id}<br />
            Title: {movie.title}
        </div>
    );
}
