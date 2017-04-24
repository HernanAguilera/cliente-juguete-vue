import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import PostForm from '@/components/post_form'
import Posts from '@/components/posts'
import Post from '@/components/post'
import PostDelete from '@/components/post/delete'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/create',
      name: 'posts_create',
      component: PostForm
    },
    {
      path: '/posts/:id',
      name: 'posts_show',
      component: Post
    },
    {
      path: '/posts/:id/edit',
      name: 'posts_edit',
      component: PostForm
    },
    {
      path: '/posts/:id/delete',
      name: 'posts_delete',
      component: PostDelete
    }
  ]
})
