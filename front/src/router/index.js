import Vue from 'vue';
import Router from 'vue-router';
import Blog from '../components/Blog';

Vue.use(Router);

export default new Router({
  mode: 'history',
  'linkActiveClass': 'active',
  routes: [{
    path: '/',
    name: 'homefeed',
    component: Blog
  }, {
    path: '/post/:id',
    name: 'post',
    props: true,
    component: Blog
  }]
})
