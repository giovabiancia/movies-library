import axios from "axios";

export function useMovie() {
  /**
   * Research a movie list by word
   * @param {string} inputValue: word to search
   * @returns callback
   */
  const getMovieListByWord = (inputValue) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.tvmaze.com/search/shows?q=${inputValue}`,
      headers: {},
    };

    return axios.request(config);
  };

  /**
   * Research a movie list by word
   * @param {int} id: id of the movie
   * @returns callback
   */
  const getMovieDetails = (id) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.tvmaze.com/shows/${id}`,
      headers: {},
    };

    return axios.request(config);
  };

  return { getMovieListByWord, getMovieDetails };
}
