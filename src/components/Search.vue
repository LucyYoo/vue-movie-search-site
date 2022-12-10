<template>
  <form
    class="main__seacrh"
    @submit.prevent="searchMovie">
    <b-form-input
      v-model="text"
      @input="searchTitle(text)" />
    <b-button
      pill
      variant="outline-secondary"
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
      return this.$store.state.fetch.title;
    },
    currentPage(){
      return this.$store.state.fetch.currentPage;
    }
  },
  methods: {
    async searchMovie(){
      await this.$store.dispatch("fetch/fetchMovieList", {
        title: this.title,
      });
      this.$store.commit(`fetch/movePage`, 'reset');
    },
    searchTitle(text){
      this.$store.commit('fetch/searchTitle', text);
    }
  }
};
</script>

<style scoped>
.form-control{
  width: 700px;
  margin-right: 10px; 
}
</style>