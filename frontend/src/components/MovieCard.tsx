import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IResult } from '../models/redux-models';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

type props = {
  movie: IResult;
};
const MovieCard = (data: props) => {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  return (
    <Col className="mb-4">
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={`${IMG_PATH}/${data.movie.poster_path}`} />
        <Card.Body>
          <Card.Title>
            <Link
              to={`/movie/${data.movie.id}`}
              style={{ textDecoration: 'none' }}
            >
              <h5>{data.movie.title}</h5>
            </Link>
          </Card.Title>
          <Card.Text>
            <p>{data.movie.release_date}</p>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
