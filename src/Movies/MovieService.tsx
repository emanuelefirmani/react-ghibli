import { Movie, Movies } from "./Movie";

export async function GetMovie(movieId: string): Promise<Movie> { 
    const response = await fetch("https://ghibliapi.herokuapp.com/films/" + movieId)
    return await response.json();
}

export async function GetMovies(): Promise<Movies> { 
    const response = await fetch("https://ghibliapi.herokuapp.com/films")
    return await response.json();
}