import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import axios from 'axios';
import "../style/Movie.css";

const Movie = (props) => {
  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState("");

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

  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <ul className="movielist">
        {movieData.map((movie, index) => {
          return <Card key={index} movie={movie} />;
        })}
      </ul>
    </div>
  );
};

export default Movie;

