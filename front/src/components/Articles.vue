<template>
  <div class="w-100 block relative mt-8">
      <h1 v-if="!articles.length">There is currently no articles available.</h1>
      <div class="articles" v-if="articles">
        <div class="article article--first" v-if="firstPost">
          first
          <h2>{{firstPost.title}}</h2>
        </div><!-- first one -->

        <div class="article article--between" v-if="middlePosts">
          <div v-for="article in middlePosts" :key="article.id">
            <h2>{{article.title}}</h2>
          </div>
        </div><!-- between -->

        <div class="article article--last" v-if="lastPost">
          last
          <h2>{{lastPost.title}}</h2>
        </div><!-- last one -->
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
.articles {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'fi fi fi fi bt bt bt bt'
    'fi fi fi fi bt bt bt bt'
    'fi fi fi fi la la la la'
    'fi fi fi fi la la la la';
  grid-auto-rows: 150px;

  .article {
    &--first {
      grid-area: fi;
    } // first article

    &--between {
      grid-area: bt;
      display: grid;
      grid-gap: 15px;
      grid-template-rows: 2fr 2fr;
      grid-auto-flow: column;
    } // articles in middle

    &--last {
      grid-area: la;
    } // last article
  } // article
} // articles
</style>
