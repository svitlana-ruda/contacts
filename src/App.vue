<template>
  <TheHeader />
  <router-view />
</template>

<script>
  import TheHeader from './components/TheHeader'

  export default {
    name: 'Home',

    components: { TheHeader }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    overflow-x: hidden;
  }
</style>
