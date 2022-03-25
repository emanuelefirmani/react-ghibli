import { Component } from "react";
import { useParams } from "react-router";

export default function MoviePage() {
    let params = useParams();
    let movieId = params.movieId;
    return (<div>The movie '{movieId}'</div>);
}
