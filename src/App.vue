<template>
  <div id="app">
    <h1>hello vue.</h1>
    <table width="50%" border="1">
      <thead>
        <tr>
          <th>NO.</th>
          <th>NAMA</th>
          <th>ALIAS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, i) in datas" :key="i">
          <td>{{ data.id }}</td>
          <td>{{ data.nama }}</td>
          <td>{{ data.alias }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: []
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    async getData() {
      const { data, error } = await this.$supabase
        .from('mapel')
        .select()

      if(data) this.datas = data
      if(error) throw error
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
