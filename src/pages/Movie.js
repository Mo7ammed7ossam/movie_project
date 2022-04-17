import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movies/day?api_key=8bae8a552fdd8f0d6e7e5caa1aac2f54&page=3"
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row container mx-auto">
      {movies.map(movie => <MovieCard key={movie.id} data={movie} />)}
    </div>
  );
}
