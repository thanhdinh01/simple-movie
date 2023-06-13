import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiKey } from "../config";
import { fetcher } from "../config";
import useSWR from "swr";
import { func } from "prop-types";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );

  useEffect(() => {
    if (data) setMovie(data);
  }, [data]);

  console.log("movie", movie);
  if (!movie) return null;
  const { poster_path, backdrop_path, title, genres, overview } = movie;

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
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 mb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="text-4xl font-bold text-center mb-10">{title}</h1>
      {genres?.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10">
          {genres.map((item) => (
            <span
              key={item.id}
              className="px-4 py-2 border border-primary rounded-lg"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="max-w-[700px] mx-auto leading-5 text-center mb-16">
        {overview}
      </p>
      <h2 className="text-3xl font-bold text-center">Casts</h2>
      <div className="grid grid-col-4 gap-x-5">
        <MovieCredits></MovieCredits>
      </div>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );

  useEffect(() => {
    if (data) setCredits(data);
  }, [data]);

  console.log("movie", credits);
  if (!credits) return null;
  console.log("credit:", credits);
  const { profile_path } = credits;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
  );
}

export default MovieDetailPage;
