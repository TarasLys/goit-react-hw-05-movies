import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from './Movies.module.css';

function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        const response = await axios.get(
          'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1',
          {
            params: { query },
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo',
            },
          }
        );
        setMovies(response.data.results);
        localStorage.setItem(
          'lastMovies',
          JSON.stringify(response.data.results)
        );
      }
    };
    fetchMovies();
  }, [query]);

  useEffect(() => {
    const lastMovies = localStorage.getItem('lastMovies');
    if (lastMovies) {
      setMovies(JSON.parse(lastMovies));
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const newQuery = event.target.elements.query.value;
    setQuery(newQuery);
    localStorage.setItem('lastQuery', newQuery);
    event.currentTarget.reset();
  };

  return (
    <div className={css.movies}>
      <form className={css.formMovies} onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Movie search"
          defaultValue={query}
        />
        <button type="submit">Search</button>
      </form>
      <ul className={css.listMovies}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
