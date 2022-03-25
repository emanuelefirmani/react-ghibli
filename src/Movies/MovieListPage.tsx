import React, { Component, useEffect, useState } from "react";
import { GetMovies } from "./MovieService";

export default function MovieListPage() {
    const [movies, setData] = useState<[{id: string, title: string}]>([{id:"", title:""}]);

    useEffect(() => {
        const fetchData = async () => {
            setData(await GetMovies());
        }

        fetchData().catch(console.error);
    }, [])

    return (
        <React.Fragment>
            <h1>Movie list</h1>
            <div id='movies'>
                <table>
                    <tbody>
                        {movies.map((m) =>
                        <tr key={"tr_" + m.id}><td><a href={"/movies/" + m.id}>{m.id}</a></td><td>{m.title}</td></tr>
                    )}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}