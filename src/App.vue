<template class="main">
  <h1 class="main__title">
    영화 검색
  </h1>
  <template v-if="isLoading">
    <Loading />
  </template>
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
  <ul class="main__moveList">
    <MovieInfoModal
      v-if="(movieList && movieList.length > 0)"
      v-model="isShow">
      <div
        :class="{wrapper: isShow}"
        class="moveList-container">
        <li
          v-for="movie in movieList"
          :key="movie.imdbID">
          <b-card
            :title="movie.Title"
            :img-src="movie.Poster"
            img-top
            img-width="250px"
            img-height="400px"
            @click="viewMovieinfo(movie.imdbID); fixScroll()">
            <b-card-text>
              {{ movie.Year }}
            </b-card-text>
          </b-card>
        </li>
      </div>
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
  <button 
    @click="movePage('prev')">
    이전페이지
  </button>
  <button 
    @click="movePage('next')">
    다음 페이지
  </button>
</template>

<script>
import Loading from '~/components/Loading';
import MovieInfoModal from'~/components/MovieInfoModal';

export default {
  components: {
    MovieInfoModal,
    Loading
  },
  data() {
    return {
      title: {
        type: String,
        default: "",
      },
      isShow: false,
      page: 1,
    };
  },
  computed: {
    movieList() {
      return this.$store.state.fetch.movieList;
    },
    movieInfo() {
      return this.$store.state.fetch.movieInfo;
    },
    isLoading() {
      return this.$store.state.fetch.isLoading;
    },
  },
  methods: {
    async searchMovie(){
      await this.$store.dispatch("fetch/fetchMovieList", {
        title: this.title,
        page: this.page,
      });
    },
    async viewMovieinfo(imdbID) {
      this.isShow = true;
      await this.$store.dispatch("fetch/fetchMoiveInfo", {
        imdbID: imdbID
      });
    },
    movePage(page){
      console.log(this.page < 100);
      if(page === 'prev'){
        this.page > 1 ? this.page -= 1 : this.page;
      } else if( page === 'next') {
        this.page < 100 ? this.page += 1 : this.page;
      }
      this.searchMovie();
    }
  },
};
</script>

<style lang="scss" scoped>
.main{
  position: relative;
  display: flex;
  flex-direction: column;
  &__title{
  text-align: center;
  margin-top: 100px;
}

  &__seacrh{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 0px
}
}


.form-control{
  width: 700px;
  margin-right: 10px; 
}
.wrapper {
  height: 100%;
  overflow: hiiden;
}

.moveList-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

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

</style>
