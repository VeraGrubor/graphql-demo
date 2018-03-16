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

const postsByCategoryIdQuery = gql`
  query postsByCategoryId($categoryId: ID!){
  postsByCategoryId(categoryId: $categoryId){
    id,
    title,
    body
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
      query: postsByCategoryIdQuery,
      loadingKey: 'loading',
      variables() {
        return {
          categoryId: this.activeCategory
        }
      },
      skip() {
        return this.skipPostByCategoryQuery
      },
      update(data) {
        return data.postsByCategoryId
      }
    },
    categories: {
      query: categoriesQuery,
      loadingKey: 'loading',
    },
  },
  data() {
    return {
      skipPostByCategoryQuery: true,
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
  beforeUpdate(){
    this.categories.length > 1 ? this.activeCategory = this.categories[0].id : null

    this.activeCategory ? this.constructHeader(this.activeCategory) : null
  },
  methods: {
    setActiveCategoryOnLoad(){
      console.warn('INITIAL LOAD, categ', this.categories)
    },
    constructHeader(categoryId) {
      this.categories.map((category, index) => {
        category.id === categoryId ? Object.assign(this.header, category) : null
      })
      console.warn('CONSTRUCT CATEGORIES',this.categories, this.header)


      this.header.desc = this.constructHeaderDesc(this.header.name)

    },

    constructHeaderDesc(title) {
      return `The latest and best ${title} articles selected by our editorial office`
    },

    changeCategory(categoryId) {
      /*if (!categoryId) return
      this.activeCategory = categoryId
      this.header = this.constructHeader(this.activeCategory)
      this.$apollo.queries.posts.skip = false
      // fetch post by category id now*/
      this.activeCategory = categoryId
      this.constructHeader(this.activeCategory);
      this.$apollo.queries.posts.skip = false;
    }
  }
}
</script>

<style>

</style>
