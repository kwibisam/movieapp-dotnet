import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { fetchMovies } from '../store/actions';
import './home.css';
import { useParams, Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage() {
  const { q } = useParams<{ q: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movie.results);
  const [query, setQuery] = useState('');

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submit:', query);
    dispatch(fetchMovies(query));
  };
  useEffect(() => {
    dispatch(fetchMovies(query));
  }, []);

  return (
    <div>
      <Container>
        <Form className="d-flex w-50 mx-auto" onSubmit={onSubmitHandler}>
          <div className="input-group mb-3">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
              type="text"
              className="form-control"
              placeholder="search for movies"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              search
            </button>
          </div>
        </Form>
      </Container>
      <Container>
        <h2 className="p-4">What's Popular</h2>
        <Row>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
