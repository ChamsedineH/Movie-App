import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Suggestion from './pages/Suggestion';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home favorites={favorites} setFavorites={setFavorites} />} />
        <Route
          path='/favorites'
          element={<Favorites favorites={favorites} />}
        />
        <Route path='/suggestion' element={<Suggestion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

