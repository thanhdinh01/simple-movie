import { Fragment, React, lazy, Suspense } from "react";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePageLoadmore = lazy(() => import("./pages/MoviePageLoadmore"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
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
            <Route
              path="/movies"
              element={<MoviePageLoadmore></MoviePageLoadmore>}
            ></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
            <Route path="*" element={<>Not Found</>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
