import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import { fetchMoviesQuery } from 'service/service';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';

function Movies() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      async function getMoviesQuery() {
        const movies = await fetchMoviesQuery(query);
        setMovies(movies);
      }
      getMoviesQuery();
    }
  }, [query]);

  const location = useLocation();

  return (
    <div className={css.movies}>
      <SearchForm />
      <MovieList movies={movies} location={location} />
    </div>
  );
}

export default Movies;
