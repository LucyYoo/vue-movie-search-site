import { API_KEY } from "../../apikey";

const API_END_POINT = `https://www.omdbapi.com?apikey=${API_KEY}`;

export default {
  install(app) {
    app.config.globalProperties.$fetch = async (movie, options) => {
      try{
        const res = await fetch(`${API_END_POINT}&s=${movie}`, {
          ...options
        });
        if(res.ok) {
          return await res.json();
        }
      } catch (e) {
        console.error(e.message);
      }

    };
  } 
};