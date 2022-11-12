import React, { useEffect } from 'react';
import { API_KEY } from '../../api/api';
import axios from "axios"
import './NavBar.scss';
import Nav from './Nav/Nav';

function NavBar({setGenres, genres}) {
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            .then(response => setGenres(response.data.genres))
    }, [])
    
  return (
    <div className='nav-bar-container'>
        <div className='nav-bar-title'>
            <h1>Categories</h1>
        </div>
        {genres.map(genre => <Nav genre={genre}/>)}
    </div>
  )
}

export default NavBar