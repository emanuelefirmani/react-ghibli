export async function GetMovie(movieId: string) { 
    const response = await fetch("https://ghibliapi.herokuapp.com/films/" + movieId)
    return await response.json();
}

export async function GetMovies() { 
    const response = await fetch("https://ghibliapi.herokuapp.com/films")
    return await response.json();
}