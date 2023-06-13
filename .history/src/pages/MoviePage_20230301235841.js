import React, { useEffect, useState } from "react";
import { fetcher, tmdbBase } from "../config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(tmdbBase.apiMovieList("popular"));
  let debounceValue = useDebounce(filter, 500);

  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (debounceValue) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=3ebac7519711ebbec5fcfb8abd2d5d99&query=${debounceValue}&page=${nextPage}`
      );
    } else {
      setUrl(tmdbBase.apiMovieList("popular", nextPage));
    }
  }, [debounceValue, nextPage]);

  const handleChangeSearch = (e) => {
    e.preventDefault();
    console.log("value:", e.target);
    setFilter(e.target.value);
  };

  const loading = !data && !error;

  const movies = data?.results || [];
  // if (!data) return null;

  // console.log("data:", data);

  // Paginate: thành phần chính: pageCount(tổng số pages), handlePageClick để chuyển tương tác nextPage.
  const [itemOffset, setItemOffset] = useState(0); // itemOffset chưa thấy tác dụng nhiều lắm
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    if (!data || !data.total_pages) return;
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // const currentItems = total_pages.slice(itemOffset, endOffset);
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [itemOffset, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setNextPage(event.selected + 1);
    console.log("newOffset", newOffset);
    setItemOffset(newOffset);
  };

  return (
    <div className="page-container py-10">
      <form className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here to search ..."
            className="w-full outline-none bg-slate-800 p-4 text-white"
            // onChange={handleChangeSearch}
          />
        </div>
        <button
          type="submit"
          className="p-4 bg-primary text-white"
          onClick={handleChangeSearch}
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
      <div className="py-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
