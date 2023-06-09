import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/MovieSearch.scss'


const TopMovies = () => {
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

    const MovieSearch = () => {
        const [searchQuery, setSearchQuery] = useState('');
        const [movies, setMovies] = useState([]);

        const handleSearch = async (event) => {
            event.preventDefault();
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=97e7387&s=${searchQuery}&type=movie&plot=short&page=1&limit=10`);
                if (response.data?.Search) {
                    setMovies(response.data.Search);
                }
            } catch (error) {
                console.error(error);
            }
        };
    };

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




const MovieSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=97e7387&s=${searchQuery}&type=movie&plot=short&page=1&limit=10`);
            if (response.data?.Search) {
                setMovies(response.data.Search);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='moviesList'>
            <h1>Movie Search</h1>
            <form onSubmit={handleSearch} className='movieSearchForm'>
                <input type="text" placeholder="Search for a movie..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {movies.length === 0 ? (
                <p>No movie found.</p>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <a key={movie.imdbID} href={`https://www.imdb.com/title/${movie.imdbID}`}>
                            <img src={movie.Poster} />
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:7149/api/Party/4/Users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>Name:</strong> {user.name}<br />
                        <strong>Email:</strong> {user.email}<br />
                        <strong>Role:</strong> {user.role}<br />
                        <img
                            src={user.pictureUrl}
                            alt="Profile"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        /><br />
                    </li>
                ))}
            </ul>
        </div>
    );
};


const CreateParty = () => {
    const [party, setParty] = useState({
        title: '',
        pictureURL: '',
        userID: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://localhost:7149/api/Party', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(party),
            });

            if (response.ok) {
                console.log('Party created!');
            } else {
                // Handle error
                console.log('Error creating party');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const handleChange = (e) => {
        setParty({ ...party, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={party.title}
                    onChange={handleChange}
                />
            </label>
            <label>
                Picture URL:
                <input
                    type="text"
                    name="pictureURL"
                    value={party.pictureURL}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Create Party</button>
        </form>
    );
};

const PartyDetails = ({ partyId }) => {
    const [party, setParty] = useState(null);

    useEffect(() => {
        const fetchParty = async () => {
            try {
                const response = await fetch(`https://localhost:7149/api/party/${partyId}`);
                const data = await response.json();

                if (response.ok) {
                    setParty(data);
                } else {
                    console.log('Error fetching party');
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchParty();
    }, [partyId]);

    if (!party) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{party.title}</h2>
            <img src={party.pictureURL} alt={party.title} />
        </div>
    );
};



const MovieList = () => {
    return (
        <div>
            <MovieSearch />
            <TopMovies />
            <CreateParty />
            <PartyDetails />
        </div>
    );
};




export default MovieList;