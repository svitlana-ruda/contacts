<template>
  <header role="banner">
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script>
  import configuration from '../data/configuration.json'

  export default {
    name: 'TheHeader',

    data() {
      return {
        title: configuration.title
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    padding: 16px 0;
    margin: 0 0 8px 0;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #2c3e50;
  }
</style>
