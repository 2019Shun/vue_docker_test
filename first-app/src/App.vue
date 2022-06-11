<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <router-link to="/test-page01">Test Page01</router-link>
    <router-link to="/test-page02">Test Page02</router-link>
  </div>
  <router-view></router-view>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  watch: {
  $route (to, from) {
    console.log(to, from);
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
