<template>
  <router-link :to="to" class="action__button absolute bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow-lg z-20">
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
  color: inherit;

  & + .action__button {
    bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
