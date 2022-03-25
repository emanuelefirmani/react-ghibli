import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Routes } from 'react-router';
import MovieListPage from './Movies/MovieListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/movies" element={<MovieListPage/>} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
