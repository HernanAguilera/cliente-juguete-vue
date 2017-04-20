import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PostsList from '@/components/posts_list'
import PostShow from '@/components/post_show'

Vue.use(Router)

export default new Router({
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
      path: '/posts/:id',
      name: 'posts_show',
      component: PostShow
    }
  ]
})
