<template>
  <div class="h-screen w-screen">
    <navigation :active="activeCategory" :single="true"></navigation>

    <div class="flex mb-3 mt-8 w-4/5 mx-auto relative">
      <div class="w-full">
        <h1 class="title">Fun with Forms in Vue 2.0</h1>
        <p class="subtitle">
          Learn how to work with forms, including <strong>validation</strong>!
        </p>
      </div>
    </div>

    <loading :show="loading" title="Loading..."></loading>

    <div class="flex mb-4 mt-4 w-4/5 mx-auto py-8 relative" v-if="!loading">
      <div class="w-3/4">
          <form class="w-full max-w-md" v-on:submit.prevent="submitForm(form)">
            <div class="flex flex-wrap -mx-3 mb-6">

              <div class="w-full px-3 mb-4">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                  Title
                </label>
                <input v-model="form.title" v-validate.initial="'required|min:3'"
                v-bind:class="{'border-red': errors.has('title')}"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3" id="title" name="title" type="text" placeholder="Jane">
                <p class="text-red text-xs italic" v-show="errors.has('title')">
                  {{ errors.first('title') }}
                </p>
              </div><!-- title -->

              <div class="w-full px-3 mb-4">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                  Body
                </label>
                <input v-model="form.body" v-validate.initial="'required|min:15'"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="body"
                name="body"
                type="hidden"
                 />
                <vue-editor v-model="form.body" :editorToolbar="customToolbar"></vue-editor>
                <p class="text-red text-xs italic" v-show="errors.has('body')">
                  {{ errors.first('body') }}
                </p>
              </div><!-- body -->

              <div class="w-full px-3 mb-4">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                  Category
                </label>
                <div class="relative">
                  <select v-model="form.category" v-show="categories" class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
                    <option v-for="category in categories" :key="category.id" v-bind:value="category.id">{{category.name}}</option>
                  </select>
                  <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>

                </div>
              </div><!-- category -->

              <div class="w-full px-3 mb-4">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                  Author
                </label>
                <div class="relative">
                  <input v-model="form.author"
                         type="text"
                         name="author"
                         id="author"
                         v-validate.initial="'required'"
                         hidden/>
                  <select v-model="form.author"
                          v-bind:class="{'border-red': errors.has('author')}"
                          class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                          id="author"
                          name="author"
                          v-validate.initial="'required'">
                    <option v-for="author in authors" :value="author.id" :key="author.id">{{author.name}}</option>
                  </select>
                  <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                 <p class="text-red text-xs italic" v-show="errors.has('author')">
                    {{ errors.first('author') }}
                </p>
              </div><!-- author -->

              <div class="w-1/3 px-3 mt-8">
                <input type="submit"
                :disabled="errors.any()"
                :class="{disabled: errors.any()}"
                class="appearance-none block w-full bg-teal text-white border border-teal rounded py-3 px-4 cursor-pointer" value="Create"/>
              </div><!-- create -->

            </div>
          </form><!-- create author form -->
      </div><!-- form column -->

      <div class="w-1/4">
        <div class="box block w-full p-4 border rounded-lg shadow">
          <h1 class="text-sm uppercase text-grey-darkest">Form values</h1>
          <div class="block mt-4">
            <ul class="list-reset">
              <li v-for="(item, k) in form" :key="k" class="text-sm mb-2 overflow-hidden truncate">
                <p class="text-grey-darkest inline-block">{{ k }}:</p> {{ item }}
              </li>
            </ul>
          </div><!-- block-->
        </div><!-- state box -->

        <div class="box block w-full border mt-8 p-4 rounded-lg shadow">
          <h1 class="text-sm uppercase text-grey-darkest">User count</h1>
          <div class="block mt-6 user__count text-5xl text-center" v-if="userCount">
            {{userCount}}
          </div>
        </div><!-- count box -->

        <div class="box block w-full border mt-8 p-4 rounded-lg shadow">
          <h1 class="text-sm uppercase text-grey-darkest">Categories count</h1>
          <div class="block mt-6 user__count text-5xl text-center" v-if="categoryCount">
            {{categoryCount}}
          </div>
        </div><!-- count box -->

        <div class="box block w-full border mt-8 p-4 rounded-lg shadow">
          <h1 class="text-sm uppercase text-grey-darkest">Posts count</h1>
          <div class="block mt-6 user__count text-5xl text-center" v-if="postCount">
            {{postCount}}
          </div>
        </div><!-- count box -->

      </div><!-- details column-->
    </div><!-- form grid -->
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Navigation from './Navigation'
import Loading from './Loading'
import { VueEditor } from 'vue2-editor'
import Toast from './Toast/'

const authorsQuery = gql`
  query {
    authors {
      id
      name
    }
  }
`

const createPostMutation = gql`
  mutation createPost($title: String!, $body: String!, $author: ID!, $category: ID!) {
    createPost(title: $title, body: $body, author: $author, category: $category) {
      id
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

const postsQuery = gql`
  query {
    posts {
      id
    }
  }
`

export default {
  components: {
    Navigation: Navigation,
    Loading: Loading,
    VueEditor: VueEditor,
    Toast: Toast
  },
  apollo: {
    authors: {
      query: authorsQuery,
      loadingKey: 'loading',
      update: function(data) {
        this.loading = null
        return data.authors
      }
    },
    categories: {
      query: categoriesQuery,
      loadingKey: 'loading',
      pollInterval: 500,
      update: function(data) {
        this.form.category = data.categories[0].id
        return data.categories
      }
    },
    posts: {
      query: postsQuery,
      pollInterval: 300,
      update(data) {
        this.loading = null
        return data.posts
      }
    }
  },
  data() {
    return {
      form: {
        title: '',
        body: '',
        author: '',
        category: ''
      },
      authors: [],
      categories: [],
      posts: [],
      loading: true,
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['code-block']
      ]
    }
  },
  computed: {
    userCount: function() {
      return this.authors.length ? this.authors.length : null
    },
    categoryCount: function() {
      return this.categories.length ? this.categories.length : null
    },
    postCount: function() {
      return this.posts.length >= 1 ? this.posts.length : null
    },
    authorId: function() {
      return this.form.author
    }
  },
  methods: {
    submitForm(form) {
      console.warn('SHOULD CREATE POST NOW')
      this.$apollo
        .mutate({
          mutation: createPostMutation,
          variables: {
            title: this.form.title,
            body: this.form.body,
            category: this.form.category,
            author: this.form.author
          }
        })
        .then(data => {
          this.$apollo.queries.categories.refetch()
          this.$apollo.queries.posts.refetch()
          this.form.title = this.form.body = this.form.author = ''
          this.form.category = this.categories[0].id
          // notification add
          Toast.addMessage({
            text: 'Post successfully created !',
            type: 'success'
          })
          // go to previous screen
          this.$router.push('/')
        })
        .catch(error => {
          Toast.addMessage({
            text: 'Error while creating post !',
            type: 'danger'
          })
          console.error(error)
        })
    }
  }
}
</script>

<style lang="less">

</style>
