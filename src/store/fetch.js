import { API_KEY } from "../../apikey";

const API_END_POINT = `https://www.omdbapi.com?apikey=${API_KEY}`;

export default {
  namespaced: true,
  state() {
    return {
      movieList: []
    };
  },
  getters: {},
  mutations: {
    changeMovieList (state, payload) {
      state.movieList = payload.Search;
      console.log(state.movieList);
    }
  },
  actions: {
    fetchMovieList: async ({commit}, payload) =>  {
      const { title } = payload;
      console.log(title);
      try {
        const movieList = await fetch(`${API_END_POINT}&s=${title}`, {
          method: "GET",
        }).then(res => res.json());
        commit('changeMovieList', movieList);
      } catch (e) {
        console.error(e.message);
      }
    },
  },
};
