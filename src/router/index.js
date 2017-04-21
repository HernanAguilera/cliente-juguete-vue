import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PostsList from '@/components/posts_list'
import PostShow from '@/components/post_show'
import PostForm from '@/components/post_form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts',
      name: 'posts_list',
      component: PostsList
    },
    {
      path: '/posts/create',
      name: 'posts_create',
      component: PostForm
    },
    {
      path: '/posts/:id',
      name: 'posts_show',
      component: PostShow
    },
    {
      path: '/posts/:id/edit',
      name: 'posts_edit',
      component: PostForm
    }
  ]
})
