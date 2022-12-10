<template>
  <div>
    <slot></slot>
  </div>
  <template v-if="modelValue">
    <div
      v-if="!isLoading"
      class="modal"
      @click="offModal">
      <div
        class="modal__inner"
        @click.stop>
        <button
          class="modal__inner--close"
          @click="offModal">
          x
        </button>
        <div>
          <div
            class="modal__container">
            <h2 class="modal__title">
              {{ movieInfo.Title }}
            </h2>
            <img
              class="modal__poster"
              :src="movieInfo.Poster"
              alt="영화 포스터" />
            <div class="modal__info">
              <div>개봉일: {{ movieInfo.Released }}</div>
              <div>감독: {{ movieInfo.Director }}</div>            
              <div>⭐ {{ movieInfo.Ratings[0].Value }}</div>
            </div>                                   
            <p class="modal__plot">
              {{ movieInfo.Plot }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>


<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
  },
  emits: ['update:modelValue'],
  computed: {
    isLoading() {
      return this.$store.state.movie.isLoading;
    },
    movieInfo() {
      return this.$store.state.movie.movieInfo;
    },
  },
  watch: {
    modelValue(newValue) {
      if(newValue){
        document.querySelector("body").classList.add("scroll-hidden");
        window.addEventListener('keyup', this.keyupHandler);
      } else {
        document.querySelector("body").classList.remove("scroll-hidden");
        window.removeEventListener('keyup', this.keyupHandler);
      }
    }
  },
  methods: {
    keyupHandler(event) {
      if(event.key === 'Escape') {
        this.offModal();
      }
    },
    offModal() {
      this.$emit('update:modelValue', false);
    },
  }
};
</script>


<style lang="scss" scoped>
.modal{
    background-color: $background--modal-color;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    }
    &__inner {
      position: relative;
        box-sizing: border-box;
        background-color: $modal--color;
        padding: 0.5rem 2rem;
        border-radius: 10px;
        width: 600px;
        height: 700px;
        overflow-y: auto;
        box-shadow: 0px 10px 10px $box--shadow-color;
        text-align: right;
    &--close{
      position: fixed;
      background-color: transparent;
      border: none;
      font-size: 1.5rem;
      width: 30px;
      height: 30px;
      padding-right: 20px;
    }
    }
    &__title{
      font-weight: 600;
      padding: 1rem 0;
    }
    &__info{
      text-align: left;
      margin-right: auto;
      padding: 20px;
    }
}
</style>
