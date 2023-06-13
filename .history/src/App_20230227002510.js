import { Fragment, React } from "react";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movie" element={<MoviePage></MoviePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
