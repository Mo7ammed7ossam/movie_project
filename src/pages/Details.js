import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export default function Details() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();

  const imgPrefix = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=8bae8a552fdd8f0d6e7e5caa1aac2f54`
      )
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row container w-75 rounded mx-auto">
      <div className="image-Conatainer col-5 p-0 rounded shadow-lg">
        <img
          className="img-fluid w-100"
          alt="not found"
          src={imgPrefix + movieDetails.poster_path}
        />
      </div>

      <div className="col-7 movie-details">
        <div className="row d-flex justify-content-around align-items-center h-100 flex-column">
          <div className="col-10 title">
            <p>{movieDetails.original_title || movieDetails.original_name}</p>
          </div>

          <div className="col-10">
            <p>{movieDetails.overview}</p>
          </div>

          <div className="col-10">
            <table class="table w-75 mx-auto">
              <tbody>
                <tr>
                  <td className="Key">Media Type </td>
                  <td className="Key"> | </td>
                  <td>{movieDetails.media_type || "--"}</td>
                </tr>

                <tr>
                  <td className="Key">Language </td>
                  <td className="Key"> | </td>
                  <td className="text-uppercase">{movieDetails.original_language || "--"}</td>
                </tr>

                <tr>
                  <td className="Key">Release Date </td>
                  <td className="Key"> | </td>
                  <td className="">{movieDetails.release_date || "--"}</td>
                </tr>


                <tr>
                  <td className="Key">Rating </td>
                  <td className="Key"> | </td>
                  <td>
                    {movieDetails.vote_average || "--"}
                    <i className="fa-solid fa-star mx-1"></i>
                  </td>
                </tr>

                <tr>
                  <td className="Key">Budget </td>
                  <td className="Key"> | </td>
                  <td>{movieDetails.budget || "--"}$</td>
                </tr>

                <tr>
                  <td className="Key">Revenue </td>
                  <td className="Key"> | </td>
                  <td>{movieDetails.revenue || "--"}$</td>
                </tr>


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
