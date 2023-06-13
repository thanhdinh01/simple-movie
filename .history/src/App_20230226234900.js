import { Fragment, React } from "react";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 py-10 mb-5 text-white">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
      <section className="movies-layout page-container  text-white pb-20">
        <h2 className="text-2xl font-bold mb-8">Now playing</h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="movies-layout page-container  text-white pb-20">
        <h2 className="text-2xl font-bold mb-8">Top rated movies</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container  text-white pb-20">
        <h2 className="text-2xl font-bold mb-8">Popular</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
