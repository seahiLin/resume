<template>
  <div class="page skills">
    <h1 class="title">技能</h1>
    <div class="main">
      <div class="container" ref="container">
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="75">
          <div class="card">
            <img src="../../assets/icons/h5.svg" alt="h5">
            <div class="details">
              <p>H5</p>
            </div>
          </div>
        </circleProgress>
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="75">
          <div class="card">
            <img src="../../assets/icons/css3.svg" alt="css3">
            <div class="details">
              <p>CSS3</p>
            </div>
          </div>
        </circleProgress>
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="75">
          <div class="card">
            <img src="../../assets/icons/js.svg" alt="js">
            <div class="details">
              <p>JS</p>
            </div>
          </div>
        </circleProgress>
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="50">
          <div class="card">
            <img src="../../assets/icons/vue.svg" alt="vue">
            <div class="details">
              <p>VUE</p>
            </div>
          </div>
        </circleProgress>
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="50">
          <div class="card">
            <img src="../../assets/icons/webpack.svg" alt="webpack">
            <div class="details">
              <p>webpack</p>
            </div>
          </div>
        </circleProgress>
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="50">
          <div class="card">
            <img src="../../assets/icons/http.svg" alt="http">
            <div class="details">
              <p>HTTP</p>
            </div>
          </div>
        </circleProgress>
      </div>
    </div>
    <footer>hover</footer>
  </div>
</template>

<script>
  import circleProgress from '@/components/circleProgress';

  export default {
    data() {
      return {
        hoverBoolean: false
      }
    },
    components: {
      circleProgress
    },
    mounted() {
      this.$refs.container.addEventListener('mouseenter', () => {
        this.hoverBoolean = true;
      });
      this.$refs.container.addEventListener('mouseleave', () => {
        this.hoverBoolean = false;
      })
    }
  }
</script>

<style lang="less">
@import './skills.less';
</style>
