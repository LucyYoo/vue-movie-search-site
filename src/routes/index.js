import { createRouter, createWebHistory } from "vue-router";
import SearchMovie from "./SearchMovie";
import MovieInfo from "./MovieInfo";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      component: SearchMovie,
    },
    {
      path: "/:id",
      component: MovieInfo
    }
  ],
});