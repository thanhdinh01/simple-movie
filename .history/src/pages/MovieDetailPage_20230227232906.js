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
      <div className="relative">
        {/* <div className="overlay"></div> */}
        <div
          className="w-full h-[600px] bg-cover bg-top"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
