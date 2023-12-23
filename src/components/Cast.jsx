import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from '../components/Cast.module.css';
import axios from 'axios';

function Cast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IzYWZhYzhlOTMyOWI1YWJkMzVjNmRmMzY5MjUzZCIsInN1YiI6IjY1ODJmM2Y4ZTI5NWI0M2MwMDY4NjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xgYP1rdb0GROreyEVhfVlLLdJA-VoS5Yhwr_rvgSydo',
          },
        }
      );
      setCast(response.data.cast);
    };
    fetchCast();
  }, [movieId]);
  return (
    <div>
      <h2>The cast of this film</h2>
      <ul className={css.imageGallery}>
        {cast.map(actor => (
          <li className={css.actorList} key={actor.id}>
            <div className={css.actorDiv}>
              <img
                className={css.actorImg}
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt=""
                width={170}
                height={255}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
