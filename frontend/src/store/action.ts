import movieSlice from './movieSlice';
import service from '../service/service';
import { RootState } from '.';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { IMovie, IResult } from '../models/redux-models';
export const actions = movieSlice.actions;
export const fetchMovies = (
  query: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response: IResult[] = await service.getMovies(query);
    dispatch(actions.setMovies(response));
  };
};

export const fetchMovie = (
  movie_id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response: IMovie = await service.getMovie(movie_id);
    dispatch(actions.setMovie(response));
  };
};

export const unsetMovie = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    dispatch(actions.unsetMovie());
  };
};
