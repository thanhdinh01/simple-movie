import { Fragment, React } from "react";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 py-10 mb-10 text-white">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner page-container h-[400px] bg-white">
        <div className="relative w-full h-full rounded-lg">
          <img
            src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
