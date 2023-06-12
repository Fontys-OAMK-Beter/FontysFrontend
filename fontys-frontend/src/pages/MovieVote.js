import '../styles/MovieVote.scss'
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [ratingInput, setRatingInput] = useState(0);
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=97e7387&s=${searchQuery}`);
      setSearchResults(response.data.Search.slice(0, 3));
      console.log(response.data.Search);    
    } catch (error) {
      console.error(error);
    }
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleNumberSubmit = (e) => {
    e.preventDefault();
    if (ratingInput === 0) {
      alert('Please select a rating.');
      return;
    }

    const newMovieEntry = { movie: selectedMovie, rating: ratingInput };
    const updatedMovies = [...selectedMovies, newMovieEntry];
    updatedMovies.sort((a, b) => b.rating - a.rating); // Sort the movies in descending order based on the rating

    setSelectedMovies(updatedMovies);
    setSelectedMovie(null);
    setRatingInput(0);
  };
  const handleStarClick = (rating) => {
    setRatingInput(rating);
  };

  const getStarRating = (rating) => {
    switch (rating) {
      case 1:
        return '⭐';
      case 2:
        return '⭐⭐';
      case 3:
        return '⭐⭐⭐';
      case 4:
        return '⭐⭐⭐⭐';
      case 5:
        return '⭐⭐⭐⭐⭐';
      default:
        return '';
    }
  };

  return (
    <div className='moviesList'>
      <h1>Movie Search</h1>
      <form onSubmit={handleSearch} className='movieSearchForm'>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter a movie title"
        />
        <button type="submit">Search</button>
      </form>

      

      <h2>Search Results:</h2>
      <div>
        {searchResults.map((movie) => (
          <a key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2> 
            <p>({movie.Year})</p>
            <button className='selectButton' onClick={() => handleMovieSelect(movie)}>Select</button>
          </a>
        ))}
        {selectedMovie && (
            <div>
            <h2>Selected Movie:</h2>
            <p>Title: {selectedMovie.Title}</p>
            <p>Year: {selectedMovie.Year}</p>
            <p>Select a Rating:</p>
            {[1,2,3,4,5].map((rating) => (
                <span 
                  key={rating}
                  onClick={() => handleStarClick(rating)}
                style={{ 
                    color: ratingInput >= rating ? 'gold' : 'gray', 
                    cursor: 'pointer', 
                    fontSize: '24px' }}   
                //style={{ cursor: 'pointer' }}
                >
                    {ratingInput >= rating ? '★' : '☆'}
                </span>
            ))}
            <form onSubmit={handleNumberSubmit}>
                <button className='selectButton' type="submit">Add to List</button>
            </form>
            </div>
        )}
      </div>

      <h2>Selected Movies:</h2>
      <table>    
        <thead>
          <tr>
            <th>Rating</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {selectedMovies.map((entry, index) => (
            <tr key={index}>
              <td>{getStarRating(entry.rating)}</td>
              <td>{entry.movie.Title}</td>
              <td>{entry.movie.Year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default App;