<template>
  <form
    class="seacrh"
    @submit.prevent="searchMovie">
    <b-form-input
      v-model="text"
      @input="searchTitle(text)" />
    <b-button
      variant="primary"
      type="submit">
      검색
    </b-button>
  </form>
  <MovieList />
</template>

<script>
import MovieList from '~/components/MovieList';

export default {
  components: {
    MovieList
  },
  computed: {
    title(){
      return this.$store.state.movie.title;
    },
    currentPage(){
      return this.$store.state.movie.currentPage;
    }
  },
  methods: {
    async searchMovie(){
      await this.$store.dispatch("movie/fetchMovieList", {
        title: this.title,
      });
      this.$store.commit(`movie/movePage`, 'reset');
    },
    searchTitle(text){
      this.$store.commit('movie/searchTitle', text);
    }
  }
};
</script>

<style scoped>
.form-control{
  width: 700px;
  margin-right: 10px; 
}

.seacrh{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 0px
}
</style>
