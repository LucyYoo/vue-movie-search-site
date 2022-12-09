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
  
export default{
  components: {
    MovieInfoModal
  },
  data() {
    return {
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
  },
  methods: {
    async viewMovieinfo(imdbID) {
      this.isShow = true;
      await this.$store.dispatch("fetch/fetchMoiveInfo", {
        imdbID: imdbID
      });
    },
    movePage(page){
      if(page === 'prev'){
        this.page > 1 ? this.page -= 1 : this.page;
      } else if( page === 'next') {
        this.page < 100 ? this.page += 1 : this.page;
      }
      this.searchMovie();
    },
    modal() {
      this.isShow = true;
    }
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

.buttons {
  display: flex;
  justify-content: space-between;
  margin: 0px 50px;
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