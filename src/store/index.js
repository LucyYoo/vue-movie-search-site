import { createStore } from "vuex";
import fetch from "./fetch";

export default createStore({
  modules: {
    fetch,
  },
});
