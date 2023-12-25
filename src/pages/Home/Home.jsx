import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';
import { fetchMoviesDay } from 'service/service';
import MovieList from 'components/MovieList/MovieList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesDay() {
      const movies = await fetchMoviesDay();
      setMovies(movies);
    }
    getMoviesDay();
  }, []);
  const location = useLocation();
  return (
    <div className={css.homeDiv}>
      <h1 className={css.titleDay}>Trending today:</h1>

      <MovieList movies={movies} location={location} />
    </div>
  );
}

export default Home;
