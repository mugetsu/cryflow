<template>
  <div id="app">
    <cryflow :phrases="[
      'Show off',
      'words in a',
      'cryptic manner'
    ]"/>
  </div>
</template>

<script>
import Cryflow from './components/Cryflow.vue'

export default {
  name: 'App',
  components: {
    Cryflow
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
