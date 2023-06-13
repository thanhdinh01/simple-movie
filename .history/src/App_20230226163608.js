import { Fragment, React } from "react";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 py-10 mb-10 text-white">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner page-container h-[400px] bg-white">
        <div className="relative w-full h-full rounded-3xl">
          <img
            src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
            alt=""
            className="w-full h-full object-cover rounded-3xl "
          />
          <div className="absolute w-full bottom-5 left-5 text-white">
            <h2>Avengers: Endgame</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
