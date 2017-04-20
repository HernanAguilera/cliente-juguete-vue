<template>
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
</template>

<script>
export default {
  name: 'post_show',
  data () {
    return {
      post: {}
    }
  },
  created: function () {
    let id = 10
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(function (res) {
      console.log(res)
      this.post = res.data
    }, function (error) {
      console.log('Error', error)
    })
  }
}
</script>

<style></style>
