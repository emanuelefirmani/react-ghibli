import 'react';

export type MovieId = string;

export interface Movie {
    id: MovieId;
    title: string;
}

export type Movies = Array<Movie>;