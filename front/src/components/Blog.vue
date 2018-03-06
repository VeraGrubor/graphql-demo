<template>
  <h1>home feed</h1>
  <Navigation />
</template>

<script>
import Navigation from './Navigation';
export default {
  name: 'homefeed',
  components: {
    Navigation: Navigation
  },
  data: {
    posts: []
  }
}
</script>

<style>

</style>
