import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Movie from "./pages/Movie";
import Favorite from "./pages/Favorite";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid py-3">
          <Routes>
            <Route path={"/"} element={<Movie />}></Route>
            <Route path={"/movie"} element={<Movie />}></Route>
            <Route path={"/favorite"} element={<Favorite />}></Route>
            <Route path={"/details/:id"} element={<Details/>}></Route>
            <Route path={"*"} element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
