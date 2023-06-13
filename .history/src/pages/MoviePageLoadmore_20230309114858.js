import React, { useEffect, useState } from "react";
import { fetcher, tmdbBase } from "../config";
import useSWR from "swr";
import MovieCard, { SkeletonLoading } from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
import { v4 as uuidV4 } from "uuid";
import useSWRInfinite from "swr/infinite";
import Button from "../components/button/Button";

const itemsPerPage = 20;

const MoviePageLoadmore = () => {
  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(tmdbBase.apiMovieList("popular"));
  let debounceValue = useDebounce(filter, 500);

  // const { data, error } = useSWR(url, fetcher);
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => url.replace("page=1", `page=${index + 1}`),
    fetcher
  );

  const movies = data ? data.reduce((a, b) => a.concat(b), []) : [];
  console.log("movies", movies);

  useEffect(() => {
    if (debounceValue) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=3ebac7519711ebbec5fcfb8abd2d5d99&query=${debounceValue}&page=${nextPage}`
      );
    } else {
      setUrl(tmdbBase.apiMovieList("popular", nextPage));
    }
  }, [debounceValue, nextPage]);

  const [valueInput, setValueInput] = useState("");
  const handleChangeSearch = (e) => {
    console.log("value:", e.target.value);
    // setFilter(e.target.value);
    setValueInput(e.target.value);
  };

  const handleClickSearch = (e) => {
    e.preventDefault();
    console.log("click:", valueInput);
    setFilter(valueInput);
  };

  const loading = !data && !error;

  // if (!data) return null;

  return (
    <div className="page-container py-10">
      <form className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here to search ..."
            className="w-full outline-none bg-slate-800 p-4 text-white"
            onChange={handleChangeSearch}
          />
        </div>
        <button
          type="submit"
          className="p-4 bg-primary text-white"
          onClick={handleClickSearch}
        >
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
      </form>
      {loading && (
        <>
          <div className="flex justify-center items-center mx-auto h-10 w-10 rounded-full border-8 border-primary border-t-transparent animate-spin"></div>
          <div className="grid grid-cols-4 gap-10 text-white mt-10">
            {new Array(itemsPerPage).fill(0).map((item) => (
              <SkeletonLoading key={uuidV4()}></SkeletonLoading>
            ))}
          </div>
        </>
      )}
      {!loading && (
        <div className="grid grid-cols-4 gap-10 text-white mt-10">
          {movies?.length > 0 &&
            movies.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
      )}

      {/* Load more code below */}
      <Button>Load more</Button>
    </div>
  );
};

export default MoviePageLoadmore;
