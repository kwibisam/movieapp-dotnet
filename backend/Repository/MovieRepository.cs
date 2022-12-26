using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Repository;
using backend.Service;
using Microsoft.AspNetCore.Mvc;

namespace serverside.Repository
{
    public class MovieRepository : IMovieRepository
    {
        private static readonly HttpClient httpClient = new HttpClient();
        public async Task<ActionResult<string>> GetMovies(string api_key)
        {
            try{
                var r = await httpClient.GetAsync($"https://api.themoviedb.org/3/discover/movie?api_key={api_key}");
                var c = r.StatusCode.ToString();
                return await r.Content.ReadAsStringAsync();
            }
            catch (HttpRequestException e) {
                return e.ToString();
            }
          
        }

        public async Task<ActionResult<string>> GetMovie(int id, string api_key) {
            var r = await httpClient.GetAsync($"https://api.themoviedb.org/3/movie/{id}?api_key={api_key}");
            return await r.Content.ReadAsStringAsync();
        }

        public async Task<ActionResult<string>> SearchMovie(string term, string api_key) {
            var r = await httpClient.GetAsync($"https://api.themoviedb.org/3/search/movie?api_key={api_key}&query={term}");
            return await r.Content.ReadAsStringAsync();
        }
    }
}