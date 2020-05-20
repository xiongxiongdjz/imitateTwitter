<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body,
h1,
h2 {
  padding: 0;
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}
</style>
