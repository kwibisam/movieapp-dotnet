import instance from './api';
import { IMovie } from '../models/redux-models';
import axios from 'axios';

const service = {
  async getMovies(query: string) {
    let url = 'https://localhost:7042/api/popular';

    if (query !== '') {
      url = 'https://localhost:7042/api/search';
    }

    let response = await axios.get(url, {
      params: {
        api_key: '2902f28cfd73b2136020cc4f1b89ad9c',
        query: query,
      },
    });
    return response.data.results;
  },

  async getMovie(id: number) {
    let response = await axios.get(`https://localhost:7042/api/movie/${id}?`, {
      params: {
        api_key: '2902f28cfd73b2136020cc4f1b89ad9c',
      },
    });
    return response.data;
  },
};

export default service;
