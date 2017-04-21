<template>
<form v-on:submit.prevent="createOrEdit">
    <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="post.title">
    </div>
    <div>
        <label for="body">Body</label>
        <textarea id="boby" cols="30" rows="10" v-model="post.body"></textarea>
    </div>
    <button type="submit">Enviar</button>
</form>
</template>

<script>
export default {
  data: function () {
    return {
      resource: {},
      post: {}
    }
  },
  methods: {
    createOrEdit: function () {
      if (this.isEditing) {
        console.log('id no existe')
        this.create()
      } else {
        console.log('el id es igual a ' + this.$route.params.id)
        this.edit()
      }
      console.log('post', this.post)
    },
    isEditing: function () {
      return !(typeof (this.$route.params.id) === 'undefined')
    },
    get: function () {
      this.resource.get({id: this.$route.params.id})
      .then(function (res) {
        console.log(res)
        this.post = res.data
      },
      function (error) {
        console.log(error)
      })
    },
    create: function () {
      console.log('create')
      this.resource.save(this.post)
      .then(function (res) {
        console.log(res)
      },
      function (error) {
        console.log('error', error)
      })
    },
    edit: function (id) {
      console.log('edit')
      this.resource.update({id: this.post.id}, this.post)
      .then(function (res) {
        console.log(res)
      },
      function (error) {
        console.log(error)
      })
    }
  },
  created: function () {
    this.resource = this.$resource('https://jsonplaceholder.typicode.com/posts{/id}')
    if (this.isEditing()) {
      this.get()
    }
  }
}

</script>

<style>
</style>
