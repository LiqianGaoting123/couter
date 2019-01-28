<template>
  <div id="app">
    <dashboard/>
    <router-view/>
  </div>
</template>

<script>
import dashboard from './views/dashboard/index'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components:{
    dashboard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
