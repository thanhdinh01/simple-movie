import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { tmdbBase } from "../config";
import { fetcher } from "../config";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { data } = useSWR(tmdbBase.apiMovieId(movieId), fetcher);

  useEffect(() => {
    if (data) setMovie(data);
  }, [data]);

  //   console.log("movie", movie);
  if (!movie) return null;
  const { poster_path, backdrop_path, title, genres, overview } = movie;

  return (
    <div className="py-10">
      <div className="relative h-[600px]">
        <div className="overlay inset-0 absolute bg-black bg-opacity-60"></div>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${tmdbBase.apiImage(
              "original",
              backdrop_path
            )})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 mb-10">
        <img
          src={tmdbBase.apiImage("original", poster_path)}
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
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilars></MovieSimilars>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const { data } = useSWR(tmdbBase.apiMovieMeta(movieId, "credits"), fetcher);

  useEffect(() => {
    if (data) setCredits(data);
  }, [data]);

  if (!credits) return null;
  const { cast } = credits;
  if (!cast || cast.length <= 0) return null;
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast?.length > 0 &&
          cast.splice(0, 4).map((item) => (
            <div key={item.id}>
              <img
                src={tmdbBase.apiImage("original", item.profile_path)}
                alt=""
                className="object-cover w-full rounded-lg h-[350px] mb-3"
              />
              <h3 className="text-2xl font-medium text-center">{item.name}</h3>
            </div>
          ))}
      </div>
    </>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const [videos, setVideos] = useState([]);
  const { data } = useSWR(tmdbBase.apiMovieMeta(movieId, "videos"), fetcher);

  useEffect(() => {
    if (data) setVideos(data);
  }, [data]);

  if (!videos) return null;
  // console.log("videos:", videos);
  const { results } = videos;

  if (!results || results.length <= 0) return null;
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-10">Trailer</h2>
      <div className="flex flex-col gap-5">
        {results?.length > 0 &&
          results.splice(0, 4).map((item) => (
            <div key={item.id} className="max-w-[800px] mx-auto mb-5">
              <h3 className="text-2xl font-bold bg-second p-1 rounded-sm mb-2 inline-block">
                {item.name}
              </h3>
              <div className="w-full">
                <iframe
                  width="800"
                  height="586"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title={item.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

function MovieSimilars() {
  const { movieId } = useParams();
  const [similars, setSimilars] = useState([]);
  const { data } = useSWR(tmdbBase.apiMovieMeta(movieId, "similar"), fetcher);

  useEffect(() => {
    if (data) setSimilars(data);
  }, [data]);

  if (!similars) return null;
  //   console.log("similars:", similars);
  const { results } = similars;

  if (!results || results.length <= 0) return null;
  return (
    <div className="movie-list mt-20">
      <h2 className="text-3xl font-bold mb-10">Similar Movies</h2>

      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {results.length > 0 &&
          results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default MovieDetailPage;
