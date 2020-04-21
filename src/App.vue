<template>
  <div id="app">   
    <h1>fiona-ui</h1>
    <div class="row">
      <fiona-button>默认按钮</fiona-button>
      <fiona-button type="primary">主要按钮</fiona-button>
      <fiona-button type="success">成功按钮</fiona-button>
      <fiona-button type="info">信息按钮</fiona-button>
      <fiona-button type="warning">警告按钮</fiona-button>
      <fiona-button type="danger">危险按钮</fiona-button>   
    </div>
  </div>
</template>
<script>
    export default {
        name: 'App',
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>