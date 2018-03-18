<template>
  <div class="w-100 block relative border">
      <h1 v-if="!articles.length">There is currently no articles available.</h1>
      <div class="feed" v-if="articles">
        <article v-for="article in articles" :key="article.id">
          {{article.title}}
        </article>
      </div>
  </div>
</template>

<script>
export default {
  name: 'articles',
  props: ['articles'],
  data() {
    return {}
  },
  methods: {},
  watch: {
    active: function(newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    }
  },
  computed: {
    firstPost: function() {
      return this.articles[0]
    },
    lastPost: function() {
      return this.articles.length > 1 ? this.articles[this.articles.length - 1] : null
    },
    middlePosts: function() {
      return this.articles.length > 1 ? this.articles.slice(0, this.articles.length) : null
    }
  }
}
</script>

<style lang="less">
.active {
  opacity: 1;
}
</style>
