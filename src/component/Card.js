import React, { useState } from "react";
import "../style/Card.css";

const Card = ({ movie }) => {
  const movieURL = "https://image.tmdb.org/t/p/original/" + movie.poster_path;

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    return storedFavorites ? storedFavorites : [];
  });
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleAddToFavorites = (movie) => {
    setFavorites((prevState) => [...prevState, movie]);
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, movie])
    );
  };

  const handleShowFullDescription = () => {
    setShowFullDescription(true);
  };

  return (
    <div className="card">
      <li className="cardbox">
        <h1 className="movieTitle">{movie.title}</h1>
        <img className="movieImg" src={movieURL} alt="" />
        <h4 className="rating">
          {movie.vote_average}/10 <span>★</span>
        </h4>
        <h3 className="movieDescription">
          {showFullDescription
            ? movie.overview
            : movie.overview.slice(0, 150)}
          {movie.overview.length > 150 && !showFullDescription && (
            <span key="see-more">
              {" "}
              <a href="#" onClick={handleShowFullDescription}>
                ... see more
              </a>
            </span>
          )}
          {showFullDescription && (
            <span key="see-less">
              {" "}
              <a href="#" onClick={() => setShowFullDescription(false)}>
                see less
              </a>
            </span>
          )}
          <button className="addtofav" onClick={() => handleAddToFavorites(movie)}>
            Add to favorites
          </button>
        </h3>
      </li>
    </div>
  );
};

export default Card;
