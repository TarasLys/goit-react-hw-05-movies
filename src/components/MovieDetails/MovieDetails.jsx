import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link, Route, Routes, useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import css from './MovieDetails.module.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo',
          },
        }
      );
      setMovie(response.data);
    };
    fetchMovie();
  }, [movieId]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className={css.movieDetails}>
      {movie && (
        <>
          <button className={css.decoreteButton} onClick={handleGoBack}>
            Go back
          </button>
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
          <Suspense fallback={<div>Is Loading...</div>}>
            <Outlet />
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
