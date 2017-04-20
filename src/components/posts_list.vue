<template>
  <ul>
    <li v-for="post in posts">{{post.title}}</li>
  </ul>
</template>

<script>
export default {
  name: 'posts_list',
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
      function (res) {
        console.log('Error!!!', res)
      }
    )
  }
}
</script>

<style lang="css">
</style>
