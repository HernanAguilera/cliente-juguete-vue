import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NoticiasList from '@/components/noticias_list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/noticias/',
      name: 'noticias_list',
      component: NoticiasList
    }
  ]
})
