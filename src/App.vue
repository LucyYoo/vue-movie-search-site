<template>
  <h1>영화 검색</h1>
  <form @submit.prevent="searchMovie">
    <input 
      type="text" 
      @input="title = $event.target.value" />
    <button>검색</button>
    <ul>
      <MovieInfoModal
        v-model="isShow">
        <div :class="{wrapper: isShow}">
          <li
            v-for="movie in movieList"
            :key="movie.imdbID"
            
            @click="viewMovieinfo(movie.imdbID)">
            <img :src="movie.Poster" />
            {{ movie.Year }}
            {{ movie.Title }}
          </li>
        </div>
        <template #movieInfoModal>
          <h3>{{ movieInfo.Title }}</h3>
          <img :src="movieInfo.Poster" />
          <p>{{ movieInfo.Plot }}</p>
        </template>
      </MovieInfoModal>
    </ul>
  </form>
</template>

<script>
import MovieInfoModal from'~/components/MovieInfoModal';

export default {
  components: {
    MovieInfoModal
  },
  data() {
    return {
      title: {
        type: String,
        default: "",
      },
      isShow: false
    };
  },
  computed: {
    movieList() {
      return this.$store.state.fetch.movieList;
    },
    movieInfo() {
      return this.$store.state.fetch.movieInfo;
    }
  },
  methods: {
    async searchMovie(){
      await this.$store.dispatch("fetch/fetchMovieList", {
        title: this.title,
      });
    },
    async viewMovieinfo(imdbID) {
      this.isShow = true;
      await this.$store.dispatch("fetch/fetchMoiveInfo", {
        imdbID: imdbID
      });
    }
  },
};
</script>

<style>
.wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hiiden;
}
</style>
