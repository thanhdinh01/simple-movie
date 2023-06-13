import React, { useEffect, useState } from "react";
import { fetcher } from "../config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";

const MoviePage = () => {
  // const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=3ebac7519711ebbec5fcfb8abd2d5d99"
  );
  const debounceValue = useDebounce(filter, 2000);

  const handleChangeSearch = (e) => {
    console.log("value:", e.target.value);
    setFilter(e.target.vlue);
    console.log("debounceValue:", debounceValue);
  };

  const { data } = useSWR(url, fetcher);

  useEffect(() => {
    if (debounceValue) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=3ebac7519711ebbec5fcfb8abd2d5d99&query=${debounceValue}`
      );
    } else {
      setUrl(
        "https://api.themoviedb.org/3/movie/popular?api_key=3ebac7519711ebbec5fcfb8abd2d5d99"
      );
    }
  }, [debounceValue]);

  // useEffect(() => {
  //   if (data) setMovies(data?.results);
  // }, [data]);

  const movies = data?.results || [];

  return (
    <div className="page-container py-10">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here to search ..."
            className="w-full outline-none bg-slate-800 p-4 text-white"
            onChange={handleChangeSearch}
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10 text-white">
        {movies?.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
