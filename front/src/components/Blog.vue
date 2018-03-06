<template>
  <div class="relative w-100">
    <navigation @send="changeCategory" :active="activeCategory"></navigation>
    <main class="w-4/5 mx-auto py-8">
      <div class="header py-2">
        <h1 class="text-4xl mb-4 font-bold">{{ header.title }}</h1>
        <p class="text-xl font-light block">{{ header.desc }}</p>
      </div>
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
  data() {
    return {
      activeCategory: 1,
      header: this.constructHeader(),
      posts: []
    }
  },
  methods: {
    constructHeader(category) {
      let header = {}

      if (!category) {
        header.title = 'Lifestyle.'
        header.desc = this.constructHeaderDesc(header.title)

        return header
      }

      switch (category) {
        case 1:
          header.title = 'Lifestyle.'
          header.desc = this.constructHeaderDesc(header.title)
          break
        case 2:
          header.title = 'Nature.'
          header.desc = this.constructHeaderDesc(header.title)
          break
        case 3:
          header.title = 'Tech.'
          header.desc = this.constructHeaderDesc(header.title)
          break
        case 4:
          header.title = 'Arhitecture.'
          header.desc = this.constructHeaderDesc(header.title)
          break
        default:
          break
      }

      // param is passed - switch case it
      return header
    },

    constructHeaderDesc(title) {
      return `The latest and best ${title} articles selected by our editorial office`
    },

    changeCategory(categoryId) {
      if (!categoryId) return
      this.activeCategory = categoryId
      this.header = this.constructHeader(this.activeCategory)
      // fetch new data for posts
    }
  }
}
</script>

<style>

</style>
