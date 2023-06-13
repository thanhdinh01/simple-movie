import React from "react";

const MovieCard = () => {
  return (
    <div className="movie-card p-3 rounded-lg bg-slate-800">
      <img
        src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="text-xl font-bold mb-5">Spiderman: Homecoming</h3>
      <div className="flex items-center justify-between opacity-50 mb-5">
        <span className="">2017</span>
        <span className="">7.4</span>
      </div>
      <button className="py-3 px-6 w-full bg-primary rounded-lg">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
