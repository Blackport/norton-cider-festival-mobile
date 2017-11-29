<template>
  <div id="app">
    <BootstrapWidthDemo/>
  </div>
</template>

<script>
import BootstrapWidthDemo from './BootstrapWidthDemo'

export default {
  name: 'app',
  components: {
    BootstrapWidthDemo
  }
}
</script>

<style lang="scss">
  @import './../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
