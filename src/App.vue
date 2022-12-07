<template>
  <h1>영화 검색</h1>
  <form @submit.prevent="SearchMovie">
    <input
      type="text"
      @input="title = $event.target.value" />
    <button> 검색 </button>
    <ul>
      <li
        v-for="movie in movies"
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
      movies: {
        type: [],
        default: () => {[];}
      },
      title: {
        type: String,
        default: ''
      }
    };
  },
  created() {
    this.SearchMovie();
  },
  methods: {
    async SearchMovie(){
      const res = await this.$fetch(this.title);
      this.movies = [...res.Search];    
    },
  }
};
</script>
