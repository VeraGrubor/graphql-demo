<template>
  <nav class="w-100 block relative border">
    <div class="w-4/5 mx-auto flex text-center py-2">
      <router-link to="/" class="w-1/5">
        <img src="/dist/img/logo.svg" alt="logo" class="block max-w-full h-auto w-10">
      </router-link>

      <ul v-if="!single" class="w-3/5 block flex-auto text-center list-reset align-baseline justify-between">
        <li class="inline-block w-1/5 py-3 cursor-pointer hover:text-grey-darker uppercase opacity-50" v-for="category in categories" :key="category.id" v-bind:class="{ active: category.id === active }" @click="setActiveCategory(category.id)">{{ category.name }}</li>
      </ul>

      <h2 v-if="single" class="w-3/5 font-thin text-lg py-3 uppercase opacity-50">
        Work with mutations
      </h2>

      <div class="nav__avatar w-1/5">
        <img src="/dist/img/avatar.svg" alt="avatar" class="w-10 rounded-full">
      </div>

    </div><!-- nav wrapper -->
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  props: ['active', 'single', 'categories'],
  data() {
    return {
      loading: ''
    }
  },
  methods: {
    setActiveCategory(categoryId) {
      this.$emit('send', categoryId)
    }
  }
}
</script>

<style lang="less">
.active {
  opacity: 1;
}
</style>
