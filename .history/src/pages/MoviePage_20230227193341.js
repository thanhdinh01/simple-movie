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
    <div className="page-container py-10">
      <div className="flex">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here to search ..."
            className="w-full outline-none bg-slate-800 p-4"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 text-white">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
