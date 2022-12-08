<template>
  <h1>영화 검색</h1>
  <form @submit.prevent="searchMovie">
    <input 
      type="text" 
      @input="title = $event.target.value" />
    <button>검색</button>
    <ul>
      <li
        v-for="movie in moveList"
        :key="movie.imdbID">
        {{ movie.Title }}
        <button>상세보기</button>
      </li>
    </ul>
  </form>
  <slot name="poster"></slot>
</template>

<script>
export default {
  data() {
    return {
      title: {
        type: String,
        default: "",
      },
    };
  },
  computed: {
    moveList() {
      return this.$store.state.fetch.movieList;
    },
  },
  methods: {
    async searchMovie(){
      await this.$store.dispatch("fetch/fetchMovieList", {
        title: this.title,
      });
    
    }
  },
};
</script>
