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

    <div class="flex mb-4 mt-4 w-4/5 mx-auto py-8 relative">
      <div class="w-3/4">
          <form class="w-full max-w-md" v-on:submit.prevent="submitForm(form)">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                  Email
                </label>
                <input v-model="form.email" v-validate.initial="'required|email'"
                v-bind:class="{'border-red': errors.has('email')}"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3" id="email" name="email" type="text" placeholder="Jane">
                <p class="text-red text-xs italic" v-show="errors.has('email')">
                  {{ errors.first('email') }}
                </p>
              </div>
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                  Name
                </label>
                <input v-model="form.name" v-validate.initial="'required|min:3'"
                v-bind:class="{'border-red': errors.has('name')}"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="name" name="name" type="text" placeholder="Doe">
                <p class="text-red text-xs italic" v-show="errors.has('name')">
                  {{ errors.first('name') }}
                </p>
              </div>

              <div class="w-1/3 px-3 mt-8">
                <input type="submit"
                v-bind:class="{disabled: errors.any()}"
                class="appearance-none block w-full bg-teal text-white border border-teal rounded py-3 px-4 cursor-pointer" value="Create"/>
              </div>
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
          <div class="block mt-6 user__cunt text-5xl text-center">
            {{userCount}}
          </div>
        </div><!-- count box -->

      </div><!-- details column-->
    </div><!-- form grid -->
  </div>
</template>

<script>
import gql from 'graphql-tag';
import Navigation from './Navigation'

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

const createAuthorMutation = gql`
  mutation createAuthor($name: String!, $email: String!) {
    createAuthor(name: $name, email: $email) {
      name
      email
    }
  }
`;

export default {
  components: {
    Navigation: Navigation
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
      form: {
        name: '',
        email: ''
      },
      posts: [],
      loading: ''
    }
  },
  computed: {
    userCount: function () {
      return this.posts.authors.length
    }
  },
  methods: {
    submitForm(form) {

      console.warn('SHOULD CREATE AUTHOR NOW')
      this.$apollo.mutate({
        mutation: createAuthorMutation,
        variables: {
          name: this.form.name,
          email: this.form.email
        },
      }).then(data => {
        console.log('Done creating.');
      });
    }
  }
}
</script>

<style lang="less">
  .disabled {
    background: #dae1e7;
    border: 1px solid #dae1e7;
    cursor: not-allowed;
  }
  .user__cunt{
    background: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
</style>
