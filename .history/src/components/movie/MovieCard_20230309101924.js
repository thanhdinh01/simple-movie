import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import PropTypes from "prop-types";
import Skeleton from "../loading/Skeleton";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { title, vote_average, release_date, poster_path, id } = item;
  return (
    <div className="movie-card p-3 flex flex-col rounded-lg bg-slate-800 select-none h-full">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-5">{title}</h3>
        <div className="flex items-center justify-between opacity-50 mb-5">
          <span className="">{new Date(release_date).getFullYear()}</span>
          <span className="">{vote_average}</span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)} bgColor="secondary">
          Watch now
        </Button>
      </div>
    </div>
  );
};

export const SkeletonLoading = () => {
  return (
    <div className="movie-card p-3 flex flex-col rounded-lg bg-slate-800 select-none h-full">
      <Skeleton height="250px" radius="8px"></Skeleton>
      <div className="flex flex-col flex-1 mt-5">
        <h3>
          <Skeleton height="20px" radius="8px"></Skeleton>
        </h3>
        <div className="flex items-center justify-between opacity-50 mb-5">
          <span>
            <Skeleton height="10px" width="50px"></Skeleton>
          </span>
          <span>
            <Skeleton height="10px" width="50px"></Skeleton>
          </span>
        </div>
        <Skeleton height="40px" radius="8px"></Skeleton>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default MovieCard;
