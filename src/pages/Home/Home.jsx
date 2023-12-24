import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day?language=en-US',
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo',
            },
          }
        );
        setMovies(response.data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.homeDiv}>
      <h1 className={css.titleDay}>Trending today:</h1>
      <ul className={css.listDay}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;




