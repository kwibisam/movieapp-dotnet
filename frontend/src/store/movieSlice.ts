import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie, IMovies, IResult } from '../models/redux-models';

const amovie: IMovie = {
  adult: false,
  backdrop_path: '',
  budget: 0,
  genres: [
    {
      id: 0,
      name: '',
    },
  ],
  homepage: '',
  id: 0,
  imdb_id: '',
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  release_date: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
};

const initialMoviestate: IMovies = {
  results: [],
  movie: amovie,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState: initialMoviestate,
  reducers: {
    setMovies(state, action: PayloadAction<IResult[]>) {
      state.results = action.payload;
    },
    setMovie(state, action: PayloadAction<IMovie>) {
      state.movie = action.payload;
    },
    unsetMovie(state) {
      state.movie = amovie;
    },
  },
});

export default movieSlice;
