import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import axios from "axios";
import "../style/Movie.css";

const Movie = (props) => {
  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [inputOpacity, setInputOpacity] = useState(0);
  const [btnOpacity, setBtnOpacity] = useState(1);
  const sortByRating = () => {
    const sortedMovies = [...movieData].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setMovieData(sortedMovies);
  };

  const sortByReverseRating = () => {
    const sortedMovies = [...movieData].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setMovieData(sortedMovies);
  };

  useEffect(() => {
    if (search) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
        )
        .then((res) => setMovieData(res.data.results));
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => setMovieData(res.data.results));
    }
  }, [search]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);
  


  return (
    <div>
      <span className="spansearch">
        <input
          className="inputsearch"
          placeholder="Search 🔍"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          style={{ opacity: inputOpacity, transition: "2s" }}
        />
        <button
          className="searchbtn"
          style={{ opacity: btnOpacity, transition: "2s" }}
          onClick={() => {
            setInputOpacity(1);
            setTimeout(() => {
              setBtnOpacity(0);
            }, 100);
          }}
        >
          🔍
        </button>
        <button className="filter" onClick={sortByRating}>
          Sort by higher rating
        </button>
        <button className="filter" onClick={sortByReverseRating}>
          Sort by lower rating
        </button>
      </span>
      <ul className="movielist">
        {movieData.map((movie, index) => {
          return <Card key={index} movie={movie} favorites={favorites} />;
        })}
      </ul>
    </div>
  );
};

export default Movie;
