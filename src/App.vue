<template class="main">
  <HeaderTitle />
  <template v-if="isLoading">
    <Loading />
  </template>
  <Search class="main__search" />
</template>

<script>
import HeaderTitle from '~/components/HeaderTitle';
import Loading from '~/components/Loading';
import Search from '~/components/Search';

export default {
  components: {
    Loading,
    HeaderTitle,
    Search,
  },
  computed: {
    isLoading() {
      return this.$store.state.fetch.isLoading;
    },
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
</style>
