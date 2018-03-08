<template>
  <div class="relative w-screen h-screen">
    <navigation @send="changeCategory" :active="activeCategory" :categories="categories"></navigation>
    <main class="w-4/5 mx-auto py-8 relative">
      <div class="header py-2">
        <h1 class="text-4xl mb-4 font-bold">{{ header.name }}</h1>
        <p class="text-xl font-light block">{{ header.desc }}</p>
      </div>
    </main>

    <action text="Add User" to="/user/create"></action>
    <action text="Add Post" to="/article/create"></action>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Navigation from './Navigation'
import ActionButton from './ActionButton'

const postsQuery = gql`
  query {
    authors {
      id
      name
      email
      posts {
        id
        body
        title
        author {
          id
        }
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

const categoryByIdQuery = gql`
  query category($id: String!) {
    category(id: $id) {
      id
      name
    }
  }
`

export default {
  name: 'homefeed',
  components: {
    Navigation: Navigation,
    Action: ActionButton
  },
  apollo: {
    posts: {
      query: postsQuery,
      loadingKey: 'loading',
      update: function(data) {
        return data
      }
    },
    categories: {
      query: categoriesQuery,
      loadingKey: 'loading'
    }
  },
  data() {
    return {
      activeCategory: 1,
      header: this.constructHeader(),
      posts: [],
      loading: 0,
      categories: [],
      category: {}
    }
  },
  methods: {
    constructHeader(categoryId) {
      let header = {}

      if (!categoryId) {
        header.title = 'Lifestyle.'
        header.desc = this.constructHeaderDesc(header.title)

        return header
      }

      this.categories.map((category, index) => {
        category.id === categoryId ? Object.assign(header, category) : null
      })

      header.desc = this.constructHeaderDesc(header.name)

      return header
    },

    constructHeaderDesc(title) {
      return `The latest and best ${title} articles selected by our editorial office`
    },

    changeCategory(categoryId) {
      if (!categoryId) return
      this.activeCategory = categoryId
      this.header = this.constructHeader(this.activeCategory)
      // fetch post by category id now
    }
  }
}
</script>

<style>

</style>
