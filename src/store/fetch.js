import { API_KEY } from "../../apikey";

const API_END_POINT = `https://www.omdbapi.com?apikey=${API_KEY}`;

export default {
  namespaced: true,
  state() {
    return {
      movieList: [],
      movieInfo: {}
    };
  },
  getters: {},
  mutations: {
    changeMovieList (state, payload) {
      state.movieList = payload.Search;
    },
    viewMovieInfo (state, payload) {
      state.movieInfo = payload;
      console.log(state.movieInfo);
    }
  },
  actions: {
    fetchMovieList: async ({commit}, payload) =>  {
      const { title } = payload;
      try {
        const movieList = await fetch(`${API_END_POINT}&s=${title}`, {
          method: "GET",
        }).then(res => res.json());
        commit('changeMovieList', movieList);
      } catch (e) {
        console.error(e.message);
      }
    },
    fetchMoiveInfo: async ({commit}, payload) => {
      const {imdbID} = payload;
      try{
        const movieInfo = await fetch(`${API_END_POINT}&i=${imdbID}&plot=full`, {
          method: "GET",
        }).then(res => res.json());
        commit('viewMovieInfo', movieInfo);
      } catch(e) {
        console.error(e.message);
      }
    }
  },
};
