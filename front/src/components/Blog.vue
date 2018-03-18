<template>
  <div class="relative w-screen h-screen font-sans subpixel-antialiased" v-if="!loading">
    <div class="loading w-screen h-screen bg-black text-white flex justify-center items-center" v-if="loading">LOADING</div>
    <navigation @send="changeCategory" :active="activeCategory" :categories="categories"></navigation>
    <main class="w-4/5 mx-auto py-8 relative">
      <div class="header py-2 mb-8">
        <h1 class="text-4xl mb-4 font-bold">{{ header.name }}</h1>
        <p class="text-xl font-light block">{{ header.desc }}</p>
      </div>
      <Articles :articles="posts" />
    </main>

    <action text="Add User" to="/user/create"></action>
    <action text="Add Post" to="/article/create"></action>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Navigation from './Navigation'
import ActionButton from './ActionButton'
import Articles from './Articles'

const postsQuery = gql`
  query($categoryId: ID!) {
    posts(categoryId: $categoryId) {
      id
      title
      category {
        id
        name
      }
      author {
        name
      }
    }
  }
`
const categoriesQuery = gql`
  query {
    categories {
      id
      name
    }
  }
`

export default {
  name: 'homefeed',
  components: {
    Navigation: Navigation,
    Action: ActionButton,
    Articles: Articles
  },
  apollo: {
    posts: {
      query: postsQuery,
      loadingKey: 'loading',
      variables() {
        return {
          categoryId: this.activeCategory || ''
        }
      },
      pollInterval: 500,
      fetchPolicy: 'network-only'
    },
    categories: {
      query: categoriesQuery,
      loadingKey: 'loading'
    }
  },
  data() {
    return {
      activeCategory: null,
      header: {
        name: null,
        desc: null
      },
      posts: [],
      loading: 0,
      categories: [],
      category: {}
    }
  },
  beforeUpdate() {
    this.categories.length > 1 && !this.activeCategory
      ? (this.activeCategory = this.categories[0].id)
      : null
    this.activeCategory ? this.constructHeader(this.activeCategory) : null
  },
  methods: {
    isCategoryActive(category) {
      return category.active
    },
    getActiveCategory() {
      var active = this.categories.filter(this.isCategoryActive)
      console.error('ACTIVE ONE', this.categories)
    },
    constructHeader(categoryId) {
      this.categories.map((category, index) => {
        category.id === categoryId ? Object.assign(this.header, category) : null
      })

      this.header.desc = this.constructHeaderDesc(this.header.name)
    },

    constructHeaderDesc(title) {
      return `The latest and best ${title} articles selected by our editorial office`
    },

    changeCategory(categoryId) {
      this.activeCategory = categoryId
      this.constructHeader(this.activeCategory)
    }
  }
}
</script>

<style>

</style>
