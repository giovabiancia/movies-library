import axios from "axios";

export function useMovie() {
  /**
   * Research a movie list by word
   * @param {string} inputValue
   * @returns callback
   */
  const searchMovieListByWord = (inputValue) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.tvmaze.com/search/shows?q=${inputValue}`,
      headers: {},
    };

    return axios.request(config);
  };

  return { searchMovieListByWord };
}
