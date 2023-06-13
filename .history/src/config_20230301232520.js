export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "3ebac7519711ebbec5fcfb8abd2d5d99";
const pathBase = "https://api.themoviedb.org/3/movie";

export const tmdbBase = {
  apiMovieList: (type) => `pathBase/${type}?api_key=${apiKey}`,

  apiMovieId: (movieId) => `pathBase/${movieId}?api_key=${apiKey}`,

  apiMovieMeta: (movieId, type) =>
    `pathBase/${movieId}/${type}?api_key=${apiKey}`,

  apiImage: (sizeImage, pathImage) =>
    `https://image.tmdb.org/t/p/${sizeImage}/${pathImage}`,
};
//https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}
