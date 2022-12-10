<template>
  <div class="main">
    <HeaderTitle />
    <template v-if="isLoading">
      <Loading />
    </template>
    <MainContainer />
  </div>
</template>

<script>
import HeaderTitle from '~/components/HeaderTitle';
import Loading from '~/components/Loading';
import MainContainer from '~/components/MainContainer';

export default {
  components: {
    Loading,
    HeaderTitle,
    MainContainer,
  },
  computed: {
    isLoading() {
      return this.$store.state.movie.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
.main{
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
