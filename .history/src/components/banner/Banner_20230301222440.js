import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import Button from "../button/Button";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=3ebac7519711ebbec5fcfb8abd2d5d99",
    fetcher
  );
  useEffect(() => {
    if (data) setMovies(data.results);
  }, [data]);

  // console.log("movies", movies);
  return (
    <section className="banner page-container h-[600px] pb-20 overflow-hidden">
      <Swiper>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ item }) => {
  const navigate=useNavigate()
  const { title, poster_path } = item;
  return (
    <div className="relative w-full h-full rounded-3xl">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgb(0,0,0,0.5)] to-[rgb(0,0,0,0.5)] rounded-3xl"></div>

      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-full object-cover object-top-[20%] rounded-3xl "
      />
      <div className="absolute w-full bottom-5 left-5 text-white">
        <h2 className="text-4xl font-bold mb-5">{title}</h2>
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
        <Button className={"w-auto font-medium"} onClick={()=> }>Watch Now</Button>
      </div>
    </div>
  );
};

export default Banner;
