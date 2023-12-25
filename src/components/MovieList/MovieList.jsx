import React from 'react';
import { Link } from 'react-router-dom';
import css from 'pages/Movies/Movies.module.css';

function MovieList({ movies, location }) {
  return (
    <ul className={css.listMovies}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
