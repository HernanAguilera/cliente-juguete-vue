<template>
  <div>
    <h2>{{post.title}} :{{post.id}}</h2>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'post_show',
  data: function () {
    return {
      post: {}
    }
  },
  methods: {
    getPost: function (id) {
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(function (res) {
        console.log(res)
        this.post = res.data
      }, function (error) {
        console.log('Error', error)
      })
    }
  },
  created: function () {
    this.getPost(this.$route.params.id)
  }
}
</script>

<style></style>
