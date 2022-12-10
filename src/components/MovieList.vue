<template class="movieList-container">
  <ul class="main__moveList">
    <MovieInfoModal
      v-if="movieList.length > 0"
      v-model="isShow">
      <div
        :class="{wrapper: isShow}"
        class="movieList-container">
        <li
          v-for="movie in movieList"
          :key="movie.imdbID">
          <b-card
            :title="movie.Title"
            :img-src="movie.Poster"
            img-top
            img-width="250px"
            img-height="400px"
            @click="viewMovieinfo(movie.imdbID); modal()">
            <b-card-text>
              {{ movie.Year }}
            </b-card-text>
          </b-card>
        </li>
      </div>
      <Buttons />
      <template
        #movieInfoModal>
        <div
          class="modal-container">
          <h3>{{ movieInfo.Title }}</h3>
          <img :src="movieInfo.Poster" />
          <p>{{ movieInfo.Plot }}</p>
        </div>
      </template>
    </MovieInfoModal>
  </ul>
</template>

<script>
import MovieInfoModal from'~/components/MovieInfoModal';
import Buttons from '~/components/Buttons';

export default{
  components: {
    MovieInfoModal,
    Buttons
  },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    movieList() {
      return this.$store.state.fetch.movieList;
    },
    movieInfo() {
      return this.$store.state.fetch.movieInfo;
    },
  },
  methods: {
    modal() {
      this.isShow = true;
    },
    viewMovieinfo(imdbID) {
      this.isShow = true;
      this.$store.dispatch("fetch/fetchMoiveInfo", {
        imdbID: imdbID
      });
    },
  },
};
</script>

<style scoped>
li {
  margin: 20px;
  width: 300px;
  height: 500px; 
  list-style-type: none;
}

.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.wrapper {
  height: 100%;
  overflow: hiiden;
}

.movieList-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

</style>