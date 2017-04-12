<template>
  <ul>
    <li v-for="noticia in noticias">{{noticia.nombre}}</li>
  </ul>
</template>

<script>
export default {
  name: 'noticias_list',
  data: function () {
    return {
      noticias: [
        {
          nombre: 'Primera noticia'
        },
        {
          nombre: 'Segunda noticia'
        }
      ]
    }
  },
  created: function () {
    this.$http.get('http://localhost:8000/api/noticias/').then(
      function (res) {
        this.noticias = res.data
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
