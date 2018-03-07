<template>
  <nav class="w-100 block relative border">
    <div class="w-4/5 mx-auto flex text-center py-2">
      <div class="w-1/5">
        <img src="/dist/img/logo.svg" alt="logo" class="block max-w-full h-auto w-10">
      </div>

      <ul v-if="!single" class="w-3/5 block flex-auto text-center list-reset align-baseline justify-between">
        <li class="inline-block w-1/5 py-3 cursor-pointer hover:text-grey-darker uppercase opacity-50" v-for="link in links" :key="link.id" v-bind:class="{ active: link.id === active }" @click="setActiveCategory(link.id)">{{ link.label }}</li>
      </ul>

      <h2 v-if="single" class="w-3/5 font-thin text-lg">
        Mutations
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
  props: ['active', 'single'],
  data() {
    return {
      links: []
    }
  },
  mounted() {
    this.getNavigationLinks()
  },
  methods: {
    setActiveCategory(categoryId) {
      this.$emit('send', categoryId)
    },
    //get navigation links from graphi
    getNavigationLinks() {
      let links = [
        {
          id: 1,
          label: 'Lifestyle'
        },
        {
          id: 2,
          label: 'Nature'
        },
        {
          id: 3,
          label: 'Tech'
        },
        {
          id: 4,
          label: 'Arhitecture'
        }
      ]

      this.links = links
    }
  },
  watch: {
    active: function(newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    }
  }
}
</script>

<style lang="less">
.active {
  opacity: 1;
}
</style>
