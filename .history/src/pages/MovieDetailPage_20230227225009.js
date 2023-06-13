import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiKey } from "../config";
import useSWR from "swr";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  console.log("movieId", movieId);
  const [movie, setMovie] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  );

  useEffect(() => {
    if (data) setMovie(data);
  }, [data]);

  console.log("movie", movie);

  return <div>Movie detail page</div>;
};

export default MovieDetailPage;
