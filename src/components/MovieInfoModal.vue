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
        <slot name="movieInfoModal"></slot>
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
      return this.$store.state.fetch.isLoading;
    },
  },
  watch: {
    modelValue(newValue) {
      if(newValue){
        window.addEventListener('keyup', this.keyupHandler);
      } else {
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
    background-color: rgba(black, .5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    &__inner {
        box-sizing: border-box;
        background-color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        max-width: 800px;
        max-height: 900px;
        overflow-y: auto;
        box-shadow: 0px 10px 10px rgba(black, .2);
        text-align: right;
    &--close{
      background-color: transparent;
      border: none;
      font-size: 1.5rem;
    }
    }
}
</style>