using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Service;
using Microsoft.AspNetCore.Mvc;
using backend.Repository;

namespace serverside.Service
{
    public class MovieService : IMovieService
    {
        private readonly IMovieRepository _movieRepository;

        public MovieService (IMovieRepository movieRepository) {
            this._movieRepository = movieRepository;
        }
        public async Task<ActionResult<string>> GetMovies(string api_key)
        {
            return await _movieRepository.GetMovies(api_key);
        }

        public async Task<ActionResult<string>> GetMovie(int id, string key) {
            return await _movieRepository.GetMovie(id, key);
        }

        public async Task<ActionResult<string>> SearchMovie(string term, string key) {
            return await _movieRepository.SearchMovie(term, key);
        }
    }
}