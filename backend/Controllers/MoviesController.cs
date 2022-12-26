using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Service;
namespace backend.Controllers
{
    [Route("api/")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IMovieService _movieService;
         public ValuesController (IMovieService movieService) {
            _movieService = movieService;
         }

        // GET: api/popular
        /// <summary>
        /// Filters top 20 most popular movies
        /// </summary>
        /// <param name="api_key"></param>
        /// <returns></returns>
        [HttpGet("popular")]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<ActionResult<string>> Get(string api_key)
        {
            return await _movieService.GetMovies(api_key);
        }

        // GET: api/movie/id
        /// <summary>
        /// Returns a single movie by Movie Id
        /// </summary>
        ///<param name="id"></param>
        /// <param name="api_key"></param>
        /// <returns>movie with given id</returns>
        ///<remarks>
        ///Sample requet:
        ///     GET/api/movie/550
        ///      {
        ///         adult: boolean,
        ///         backdrop_path: string,
        ///         belongs_to_collection: string,
        ///         budget: number,
        ///         genre_ids: [],
        ///         homepage: string,
        ///         id: number,
        ///         ...
        ///       }
        ///
        ///</remarks>
        [HttpGet("movie/{id}")]
        public async Task<ActionResult<string>> Get(int id, string api_key)
        {
            return await _movieService.GetMovie(id, api_key);
        }

        // GET: api/search
         /// <summary>
        /// Returns movies where the title matches parts of the query string
        /// </summary>
        ///<param name="query"></param>
        /// <param name="api_key"></param>
        /// <returns>list of movies matching query string</returns>
        [HttpGet("search")]
        public async Task<ActionResult<string>> Search(string query, string api_key)
        {
            return await _movieService.SearchMovie(query, api_key);
        }

    }
}