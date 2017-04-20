<template>
    <h2>Post :{{post.id}}</h2>
</template>

<script>
export default {
  name: 'post_show',
  data () {
    return {
      post: {}
    }
  },
  created: () => {
    let id = 10
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .them(function (res) {
      console.log(res)
      this.post = res.data
    })
  }
}
</script>

<style></style>
