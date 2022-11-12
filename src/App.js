import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarContainer from './components/Navbar/NavBarContainer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import MoviePageContainer from './pages/MoviePage/MoviePageContainer';

function App() {
  return (
    <div className="app">
      <NavBarContainer />
      <div className='main-contnet'>
        <Routes>
          <Route path='/' element={<HomePageContainer /> }/>
          <Route path='/movie' element={<MoviePageContainer /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
