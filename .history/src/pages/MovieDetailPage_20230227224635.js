import React from "react";
import { useParams } from "react-router";
import { apiKey } from "../config";

const MovieDetailPage = () => {
  const params = useParams();
  console.log("params", params);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${params}?api_key=${apiKey}`
  );
  return <div>Movie detail page</div>;
};

export default MovieDetailPage;
