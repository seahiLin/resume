<template>
  <div class="page skills">
    <h1 class="title">{{$t('skills.title')}}</h1>
    <div class="main">
      <div class="container" ref="container">
        <circleProgress
          v-for="(item, index) in skills"
          :key="index"
          :hoverBoolean="hoverBoolean"
          :progress="item.progress">
          <div class="card">
            <img :src="item.imgsrc" :alt="item.name">
            <div class="details">
              <ul>
                <li v-for="(detail, index) in item.details" :key="index">{{detail}}</li>
              </ul>
              <span>{{item.name}}</span>
            </div>
          </div>
        </circleProgress>
      </div>
    </div>
    <footer>{{$t('skills.footer')}}</footer>
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
    computed: {
      skills () {
        return this.$store.state.skills;
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
