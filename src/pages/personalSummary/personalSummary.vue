<template>
  <div class="page personal-summary">
    <h3 class="title">总结</h3>
    <div class="main">
      <div class="summary-items-container">
        <div class="summary-item"
          v-for="(item, index) in summary"
          :key="index">
          <router-link :to="item.path">{{item.name}}</router-link>
        </div>
      </div>
      <div class="view-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import './personalSummary.less';
</style>

<script>
export default {
  name: 'personalSummary',
  computed: {
    summary () {
      return this.$store.state.summary;
    }
  }
}
</script>