import React, { useEffect, useState } from "react";
import { fetcher } from "../config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=3ebac7519711ebbec5fcfb8abd2d5d99`,
    fetcher
  );

  useEffect(() => {
    if (data) setMovies(data?.results);
  }, [data]);
  return (
    <div className="page-container">
      <div className="grid grid-cols-4">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
