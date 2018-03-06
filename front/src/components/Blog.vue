<template>
  <div class="relative w-100">
    <navigation></navigation>
    <main class="w-4/5 mx-auto py-8">
      main content
    </main>
  </div>
</template>

<script>
import Navigation from './Navigation'
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
