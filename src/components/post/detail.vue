<template>
  <tr v-if='type == "tr"'>
    <td>{{post.id}}</td>
    <td>{{post.userId}}</td>
    <td>{{post.title}}</td>
    <td>{{post.body}}</td>
    <td class='actions'>
      <router-link :to="{ name: 'posts_show', params: {id:post.id} }">Show</router-link>
      <router-link :to="{ name: 'posts_edit', params: {id:post.id} }">Edit</router-link>
      <delete-post v-bind:object='post' v-bind:confirmacion='false'></delete-post>
    </td>
  </tr>
  <div v-else>
    <table>
      <tbody>
        <tr>
          <th>id</th>
          <td>{{post.id}}</td>
        </tr>
        <tr>
          <th>userId</th>
          <td>{{post.userId}}</td>
        </tr>
        <tr>
          <th>Title</th>
          <td>{{post.title}}</td>
        </tr>
        <tr>
          <th>Body</th>
          <td>{{post.body}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import mixins from '@/components/post/mixins.js'
  import deletePost from '@/components/post/delete'

  export default {
    name: 'post',
    mixins: [mixins],
    props: {
      type: {
        default: 'table',
        type: String
      },
      object: {
        default: null,
        type: Object
      }
    },
    data () {
      return {
        resource: {},
        post: {}
      }
    },
    methods: {
    },
    components: {
      deletePost
    },
    created: function () {}
  }
</script>

<style>
  .actions{
    width: 8em;
  }
</style>
