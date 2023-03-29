import React from "react";
import "../style/Card.css";

const Card = ({ movie }) => {
  const movieURL = "https://image.tmdb.org/t/p/original/" + movie.poster_path;

  return (
    <div className="card">
      <li className="cardbox">
        <h1 className="movieTitle">{movie.title}</h1>
        <img className="movieImg" src={movieURL} alt="" />
        <h4 className="rating">{movie.vote_average}/10 ★</h4>
        <h3 className="movieDescription">
          {movie.overview.slice(0, 200)}
          {movie.overview.length > 200 && (
            <span key="see-more">
              {" "}
              <a
                href={`https://www.twitch.tv/sardoche`}
                target="_blank"
                rel="noopener noreferrer"
              >
                ... see more
              </a>
            </span>
          )}
        </h3>
      </li>
    </div>
  );
};

export default Card;
