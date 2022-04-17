import React from "react";

import { Link } from "react-router-dom";

import "./MovicCard.css";

export default function MovieCard(props) {
  const imgPrefix = "https://image.tmdb.org/t/p/w500/";
  console.log(props);
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="movie-card rounded shadow-lg  my-3">
        <img
          className="img-fluid w-100"
          alt="not found"
          src={imgPrefix + props.data.poster_path}
        />

        <div className="movie-desc text-light p-3">
          <div className="d-flex flex-column h-50 justify-content-around">
            <h5 className="text-center ">
              {props.data.original_title || props.data.original_name}
            </h5>
            <div className=" d-flex justify-content-around card-deatails">
              <span className="">{props.data.original_language}</span>
              <span className="">{props.data.media_type}</span>
              <span className="rate">
                {props.data.vote_average}
                <i className="fa-solid fa-star mx-1"></i>
              </span>
            </div>
            <div className="">
              <Link className="btn btn-details " to={`/details/${props.data.id}`}>
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
