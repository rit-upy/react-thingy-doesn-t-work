import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "../styles.css";

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json)
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="movies-grid">
      {console.log(movies)};
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}></MovieCard>
      ))}
    </div>
  );
}
