export default {
  methods: {
    thereIsId: function () {
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
    }
  },
  created: function () {
    if (this.object !== null) {
      this.post = this.object
    } else if (this.thereIsId()) {
      this.resource = this.$resource('https://jsonplaceholder.typicode.com/posts{/id}')
      this.get()
    } else {
      console.error('No ha provisto valor para la propiedad object')
    }
  }
}
