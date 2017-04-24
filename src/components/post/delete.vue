<template>
  <div v-if='confirmacion'>
    <h2>¿Confirma que desea eliminar este post?</h2>
    <h3>{{post.id}}: {{post.title}}</h3>
    <p> {{post.body}} </p>
    <button v-on:click.prevent='deletePost(post.id)'>Eliminar</button>
  </div>
  <div v-else>
    <router-link :to="{ name: 'posts_delete', params: {id:post.id} }">Eliminar</router-link>
  </div>
</template>

<script>
import mixins from '@/components/mixins.js'
export default {
  props: {
    confirmacion: {
      type: Boolean,
      default: true
    },
    object: {
      type: Object,
      default: null
    }
  },
  name: 'delete',
  mixins: [mixins],
  data: function () {
    return {
      post: {}
    }
  },
  methods: {
    deletePost (id) {
      this.resource.delete({id: this.post.id})
      .then(function (res) {
        console.log('delete', res)
      },
      function (error) {
        console.log(error)
      })
    }
  },
  created: function () {}
}
</script>
