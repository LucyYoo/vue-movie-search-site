<template>
  <form
    class="main__seacrh"
    @submit.prevent="searchMovie">
    <b-form-input
      v-model="text"
      @input="title = text" />
    <b-button
      pill
      variant="outline-secondary"
      type="submit">
      검색
    </b-button>
  </form>
</template>

<script>
export default {
  data(){
    return{
      title: {
        type: String,
        default: "",
      }
    };
  },
  methods: {
    async searchMovie(){
      await this.$store.dispatch("fetch/fetchMovieList", {
        title: this.title,
        page: this.page,
      });
      this.page = 1;
    },
  }
};
</script>

<style scoped>
.form-control{
  width: 700px;
  margin-right: 10px; 
}
</style>