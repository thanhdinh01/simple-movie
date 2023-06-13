import React from "react";
import { useParams } from "react-router";

const MovieDetailPage = () => {
  const params = useParams();
  console.log("params", params);
  return <div>Movie detail page</div>;
};

export default MovieDetailPage;
