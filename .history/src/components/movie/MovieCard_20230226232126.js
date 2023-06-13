import React from "react";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="movie-card p-3 flex flex-col rounded-lg bg-slate-800 select-none h-full">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-bold mb-5">{title}</h3>
        <div className="flex items-center justify-between opacity-50 mb-5">
          <span className="">{new Date(release_date).getFullYear()}</span>
          <span className="">{vote_average}</span>
        </div>
        <button className="py-3 px-6 w-full bg-primary rounded-lg">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
