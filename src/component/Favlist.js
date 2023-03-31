import React, { useState, useEffect } from "react";
import Card from "./Card";

const Favlist = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      <ul className="movielist">
        {favorites.map((movie, index) => {
          return <Card key={index} movie={movie} favorites={favorites} />;
        })}
      </ul>
    </div>
  );  
};

export default Favlist;





