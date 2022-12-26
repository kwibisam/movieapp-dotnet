using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace backend.Service
{
    public interface IMovieService
    {
        public Task<ActionResult<string>> GetMovies(string key);
        public Task<ActionResult<string>> GetMovie(int id, string key);
        public Task<ActionResult<string>> SearchMovie(string term, string key);



    }
}