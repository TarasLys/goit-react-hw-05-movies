import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import css from './MovieDetails.module.css';
import { fetchMovie } from 'service/service';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      const movies = await fetchMovie(movieId);
      setMovie(movies);
    }
    getMovie();
  }, [movieId]);

  const location = useLocation();
  const path = useRef(location?.state?.from ?? '/');

  return (
    <div className={css.movieDetails}>
      {movie && (
        <>
          <GoBackBtn path={path.current}>Go back</GoBackBtn>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={200}
          />
          <p>User score: {movie.vote_average}</p>
          <p>Overview: {movie.overview}</p>
          <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
          <hr />
          <h3>Additional Information:</h3>
          <ul>
            <li className={css.decoreLink}>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li className={css.decoreLink}>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <hr />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default MovieDetails;
