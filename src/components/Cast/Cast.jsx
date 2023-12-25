import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Cast/Cast.module.css';
import { fetchCast } from 'service/service';

function Cast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      const cast = await fetchCast(movieId);
      setCast(cast);
    }
    getCast();
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
