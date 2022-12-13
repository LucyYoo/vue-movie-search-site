<template>
  <section class="loading">
    <img
      class="loading__img"
      src="https://cdn.roto.codes/images/nyan-cat.gif"
      alt="loading" />
  </section>
</template>

<style lang="scss" scoped>
.loading{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: $background--modal-color;
    display: flex;
        justify-content: center;
        align-items: center;
    &__img {
        width: 600px;
        height: 300px
    }
}
</style>
