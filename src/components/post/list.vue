<template>
  <table>
    <thead>
      <th>Id</th>
      <th>UserId</th>
      <th>title</th>
      <th>body</th>
      <th></th>
    </thead>
    <tbody>
      <template v-for='post in posts'>
        <post v-bind:object='post' type='tr'></post>
      </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Post from '@/components/post/detail'
export default {
  name: 'posts',
  components: {
    'post': Post
  },
  data: function () {
    return {
      posts: []
    }
  },
  created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
    .then(
      function (res) {
        console.log(res)
        this.posts = res.data
      },
      function (error) {
        console.log('Error!!!', error)
      }
    )
  }
}
</script>

<style>
</style>
