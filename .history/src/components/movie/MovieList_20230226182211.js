import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  // https://api.themoviedb.org/3/movie/550?api_key=3ebac7519711ebbec5fcfb8abd2d5d99
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
