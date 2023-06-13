import { Fragment, React } from "react";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 py-10 mb-5 text-white">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner page-container h-[500px]">
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
      </section>
      <section className="movies-layout page-container">
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card p-5 rounded-lg text-white bg-slate-800">
            <img
              src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <h2 className="text-3xl">Spiderman: Homecoming</h2>
            <div className="flex items-center justify-between">
              <span className="">2017</span>
              <span className="">7.4</span>
            </div>
            <button className="py-3 px-6 w-full bg-primary rounded-lg">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
