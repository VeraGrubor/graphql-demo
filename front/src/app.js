import Vue from 'vue'
import App from './App.vue'
// router
import router from './router'
import './app.css'
// image
import {
  VLazyImagePlugin
} from "v-lazy-image";
// apollo
import {
  ApolloClient
} from 'apollo-client'
import {
  HttpLink
} from 'apollo-link-http'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
// validation
import VeeValidate from 'vee-validate';

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:8080/graphql',
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

// use
Vue.use(VueApollo)
Vue.use(VeeValidate)
Vue.use(VLazyImagePlugin);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app');
