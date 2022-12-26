using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace backend.Repository
{
    
    public interface IMovieRepository
    {
       public Task<ActionResult<string>> GetMovies(string api_key);//first 20 movies from tmdb
       public Task<ActionResult<string>> GetMovie(int id, string api_key);//movie by id
       public Task<ActionResult<string>> SearchMovie(string term, string api_key);//search from movies

    }
}