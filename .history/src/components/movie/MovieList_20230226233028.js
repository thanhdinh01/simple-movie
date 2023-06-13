import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieList = ({ types }) => {
  // https://api.themoviedb.org/3/movie/now_playing?api_key=3ebac7519711ebbec5fcfb8abd2d5d99
  console.log("type", type);

  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=3ebac7519711ebbec5fcfb8abd2d5d99",
    fetcher
  );

  useEffect(() => {
    if (data) setMovies(data?.results);
  }, [data]);

  //   console.log("data", movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
