import React, { useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import './Movies.css'

const Movies = () => {
   //states
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

  //Consume the API
    const searchMovie = async (e) => {
        e.preventDefault();

        
        const apiURI = ` http://www.omdbapi.com/?i=tt3896198&apikey=14d55ec9`;

        try {
            const response = await axios.get(apiURI);
            const data = response.data.Search
            console.log(data);

           //setState
            setMovies(data);

        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div className="shoppies">
         {/*Header component*/}
            <Header
                searchMovie={searchMovie}
                query={query}
                setQuery={setQuery}
                movies={movies}
            />
        </div>
    )
}

export default Movies;