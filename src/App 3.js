import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Suggestion from './pages/Suggestion';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} ></Route>
        <Route path='/favorites' element= {<Favorites/>} ></Route>
        <Route path='/suggestion' element= {<Suggestion/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
