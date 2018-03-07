<template>
  <div class="relative w-screen h-screen">
    <navigation @send="changeCategory" :active="activeCategory"></navigation>
    <main class="w-4/5 mx-auto py-8 relative">
      <div class="header py-2">
        <h1 class="text-4xl mb-4 font-bold">{{ header.title }}</h1>
        <p class="text-xl font-light block">{{ header.desc }}</p>
      </div>
    </main>

    <action text="Add User" to="/user/create"></action>
    <action text="Add Post" to="/article/create"></action>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import Navigation from './Navigation'
import ActionButton from './ActionButton'

const postsQuery = gql`
  query {
    authors {
      id,
      name,
      email,
      posts {
        id,
        body,
        title,
        author {
          id
        }
      }
    }
  }
`;

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
      pollInterval: 300,
      update: function(data) {
        return data;
      }
    }
  },
  data() {
    return {
      activeCategory: 1,
      header: this.constructHeader(),
      posts: [],
      loading: 0,
      pollInterval: 300
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
