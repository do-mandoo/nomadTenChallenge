import React from 'react';
import MovieItem from './components/MovieItem';
import Home from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './routes/Detail';

const MovieApp = () => {
  // return <>{/* <Home />; */}</>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/movie/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MovieApp;
