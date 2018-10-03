<template>
  <div id="app">
    <introduction></introduction>
  </div>
</template>

<script>

import introduction from './pages/introduction/introduction'

export default {
  name: 'App',
  components: {
    introduction
  }
}
</script>

<style lang="less">
@import './assets/styles/common.less';
@import './assets/styles/reset.less';
</style>

