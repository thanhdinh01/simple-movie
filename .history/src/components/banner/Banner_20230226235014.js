import React from "react";

const Banner = () => {
  return <section className="banner page-container h-[500px] pb-20"></section>;
};

const BannerItem = () => {
  return (
    <div className="relative w-full h-full rounded-3xl">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgb(0,0,0,0.5)] to-[rgb(0,0,0,0.5)] rounded-3xl"></div>

      <img
        src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
        alt=""
        className="w-full h-full object-cover rounded-3xl "
      />
      <div className="absolute w-full bottom-5 left-5 text-white">
        <h2 className="text-4xl font-bold mb-5">Avengers: Endgame</h2>
        <div className="flex gap-x-5 items-center mb-8">
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>{" "}
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>{" "}
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <button className="py-3 px-6 bg-primary text-white rounded-md font-medium">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
