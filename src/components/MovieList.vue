<template>
  <ul
    v-if="movieList"
    class="main__moveList">
    <MovieInfoModal
      v-if="movieList.length > 0"
      v-model="isShow">
      <div
        :class="{wrapper: isShow}"
        class="movieList__container">
        <li
          v-for="movie in movieList"
          :key="movie.imdbID">
          <div
            class="card"
            @click="viewMovieinfo(movie.imdbID); modal()">
            <img
              class="card-img-top"
              :src="movie.Poster"
              alt="영화 포스터" />
            <div class="card-body">
              <h5 class="card-title">
                {{ movie.Title }}
              </h5>
              <p class="card-text">
                {{ movie.Year }}
              </p>
            </div>
          </div>
        </li>
      </div>
      <PageButtons />
    </MovieInfoModal>
  </ul>
  <div
    v-else
    class="nothing">
    검색한 결과가 없습니다!
  </div>
</template>

<script>
import MovieInfoModal from'~/components/MovieInfoModal';
import PageButtons from '~/components/PageButtons';

export default{
  components: {
    MovieInfoModal,
    PageButtons
  },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    movieList() {
      return this.$store.state.movie.movieList;
    },
    
  },
  methods: {
    modal() {
      this.isShow = true;
    },
    viewMovieinfo(imdbID) {
      this.isShow = true;
      this.$store.dispatch("movie/fetchMoiveInfo", {
        imdbID: imdbID
      });
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  margin: 20px;
  width: 280px;
  height: 400px; 
  list-style-type: none;
}

.wrapper {
  height: 100%;
  overflow: hiiden;
}

.movieList__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card {
  width: 252px;
  transition: all 0.2s linear;
  &-img-top{
    width: 250px;
    height: 300px;
  }
  &-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 10px $box--shadow-color;
    cursor: pointer;
  }
}

.nothing{
  text-align: center;
  color: $font--color-gray;
}
</style>
