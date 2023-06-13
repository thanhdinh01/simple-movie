import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiKey } from "../config";
import { fetcher } from "../config";
import useSWR from "swr";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  console.log("movieId", movieId);
  const [movie, setMovie] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );

  useEffect(() => {
    if (data) setMovie(data);
  }, [data]);

  console.log("movie", movie);
  const { poster_path, backdrop_path } = movie;

  return (
    <div className="py-10">
      <div className="relative h-[600px]">
        <div className="overlay inset-0 absolute bg-black bg-opacity-60"></div>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto mb-[-200px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default MovieDetailPage;
