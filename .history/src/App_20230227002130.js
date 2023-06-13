import { Fragment, React } from "react";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Banner></Banner>
      <Routes>
        <Route element={<Main></Main>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
