import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/MovieSearch.scss'

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://www.omdbapi.com/?apikey=97e7387&s=movie&type=movie&plot=short&page=1&limit=10');
                setMovies(response.data.Search);
                console.log(response.data.Search)
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className='moviesList'>
            <h1>Top 10 Movies</h1>
            <div>
                {movies.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    movies.map((movie) => (
                        <a key={movie.imdbID} href={`https://www.imdb.com/title/${movie.imdbID}`}>
                            <img src={movie.Poster} />
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </a>
                    ))
                )}
            </div>
        </div>
    );
};

export default MovieList;