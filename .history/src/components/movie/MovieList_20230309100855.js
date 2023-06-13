import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard, { SkeletonLoading } from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbBase } from "../../config";
import PropTypes from "prop-types";

const MovieList = ({ type = "now_playing" }) => {
  // https://api.themoviedb.org/3/movie/now_playing?api_key=3ebac7519711ebbec5fcfb8abd2d5d99

  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(tmdbBase.apiMovieList(type), fetcher);

  useEffect(() => {
    if (data) setMovies(data?.results);
  }, [data]);
  const isLoading = !data && !error;
  //   console.log("data", movies);
  return (
    <div className="movie-list">
      {!isLoading && (
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <SkeletonLoading></SkeletonLoading>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
      {isLoading && (
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MovieList;
