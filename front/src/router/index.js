import Vue from 'vue';
import Router from 'vue-router';
import Blog from '../components/Blog';
import UserForm from '../components/UserForm';
import PostForm from '../components/PostForm';

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
  }, {
    path: '/user/create',
    name: 'createUser',
    props: false,
    component: UserForm
  },
  {
    path: '/article/create',
    name: 'createPost',
    props: false,
    component: PostForm
  }]
})
