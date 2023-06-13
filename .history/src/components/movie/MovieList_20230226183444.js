import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";

const MovieList = () => {
  // https://api.themoviedb.org/3/movie/now_playing?api_key=3ebac7519711ebbec5fcfb8abd2d5d99

  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=3ebac7519711ebbec5fcfb8abd2d5d99",
    fetcher
  );

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
