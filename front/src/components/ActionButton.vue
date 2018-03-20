<template>
  <router-link :to="to" class="action__button fixed text-white font-semibold py-2 px-4 rounded shadow-lg z-20">
      {{text}}
  </router-link>
</template>

<script>
export default {
  props: ['text', 'to']
}
</script>

<style lang="less">
.action__button {
  right: 6rem;
  bottom: 4rem;
  text-decoration: none;
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);

  & + .action__button {
    bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
