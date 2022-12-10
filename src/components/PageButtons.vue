<template>
  <div class="buttons">
    <b-button
      variant="light"
      @click="movePage('prev')">
      이전페이지
    </b-button>
    <b-button 
      variant="light"
      @click="movePage('next')">
      다음 페이지
    </b-button>
  </div>
</template>

<script>
export default {
  computed: {
    currentPage(){
      return this.$store.state.fetch.currentPage;
    }
  },
  methods: {
    movePage(page){

      if(page === 'prev'){
        this.currentPage > 1 ? this.$store.commit(`fetch/movePage`, -1) : this.currentPage;

        
      } else if( page === 'next') {
        this.currentPage < 100 ? this.$store.commit(`fetch/movePage`, +1) : this.currentPage;
      }
      this.searchMovie();
    },
    searchMovie(){
      this.$store.dispatch("fetch/fetchMovieList", {
        page: this.currentPage,
      });
    },
  }
};
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  margin: 0 3rem;
}
</style>