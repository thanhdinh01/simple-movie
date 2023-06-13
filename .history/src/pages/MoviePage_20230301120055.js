import React, { useEffect, useState } from "react";
import { fetcher } from "../config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=3ebac7519711ebbec5fcfb8abd2d5d99"
  );
  let debounceValue = useDebounce(filter, 500);

  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (debounceValue) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=3ebac7519711ebbec5fcfb8abd2d5d99&query=${debounceValue}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=3ebac7519711ebbec5fcfb8abd2d5d99&page=${nextPage}`
      );
    }
  }, [debounceValue, nextPage]);

  const handleChangeSearch = (e) => {
    console.log("value:", e.target.value);
    setFilter(e.target.value);
    console.log("debounceValue:", debounceValue);
  };

  const loading = !data && !error;

  const movies = data?.results || [];

  const { page, total_pages } = data;
  console.log("data:", data);

  const [itemOffset, setItemOffset] = useState(0);

  const pageCount = Math.ceil(movies.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;

    setItemOffset(newOffset);
  };

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
      {loading && (
        <div className="flex justify-center items-center mx-auto h-10 w-10 rounded-full border-8 border-primary border-t-transparent animate-spin"></div>
      )}
      {!loading && (
        <div className="grid grid-cols-4 gap-10 text-white mt-10">
          {movies?.length > 0 &&
            movies.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default MoviePage;
