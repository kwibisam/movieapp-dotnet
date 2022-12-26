import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { fetchMovie, unsetMovie } from '../store/actions';
import './movie.css';

export default function MoviePage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie.movie);

  useEffect(() => {
    console.log('testing id:', id);
    dispatch(fetchMovie(Number(id)));
    return () => {
      dispatch(unsetMovie());
    };
  }, [id, dispatch]);

  console.log('movie', movie);
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <section className="movie-details">
        <div className="left">
          <img src={`${IMG_PATH}/${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="right">
          <div className="title">
            <a href={movie.homepage}>
              <h3>{movie.title}</h3>
            </a>

            <h4>Overview</h4>
            <p>{movie.overview}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
