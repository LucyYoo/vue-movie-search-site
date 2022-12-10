<template>
  <div class="buttons">
    <button
      @click="movePage('prev')">
      이전페이지
    </button>
    <button 
      @click="movePage('next')">
      다음 페이지
    </button>
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
  margin: 0px 50px;
}

button {
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid black;
}
</style>