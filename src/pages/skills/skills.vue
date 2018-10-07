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
              <p>· 了解html渲染解析知识</p>
              <p>· 熟悉html布局,了解响应式布局</p>
              <p>· 对于语义化标签有一定认识</p>
              <span>HTML</span>
            </div>
          </div>
        </circleProgress>
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="75">
          <div class="card">
            <img src="../../assets/icons/css3.svg" alt="css3">
            <div class="details">
              <p>· 基础样式编写</p>
              <p>· 对于css盒模型与BFC有一定理解</p>
              <p>· 熟悉css3动画</p>
              <span>CSS</span>
            </div>
          </div>
        </circleProgress>
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="75">
          <div class="card">
            <img src="../../assets/icons/js.svg" alt="js">
            <div class="details">
              <p>· 熟悉js原型及继承知识</p>
              <p>· 了解冒泡机制及事件委托</p>
              <p>· 熟悉DOM操作</p>
              <p>· 对ES6有一定了解及实践</p>
              <span>JS</span>
            </div>
          </div>
        </circleProgress>
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="50">
          <div class="card">
            <img src="../../assets/icons/vue.svg" alt="vue">
            <div class="details">
              <p>· 熟悉生命周期钩子函数</p>
              <p>· 了解组件通信方法</p>
              <p>· 熟悉vue-router</p>
              <p>· 对数据双向绑定有一定认识</p>
              <span>Vue</span>
            </div>
          </div>
        </circleProgress>
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="50">
          <div class="card">
            <img src="../../assets/icons/webpack.svg" alt="webpack">
            <div class="details">
              <p>· 了解webpack常用配置</p>
              <p>· 了解模块化，组件化开发</p>
              <span>Webpack</span>
            </div>
          </div>
        </circleProgress>
        <circleProgress 
          :hoverBoolean="hoverBoolean"
          :progress="50">
          <div class="card">
            <img src="../../assets/icons/http.svg" alt="http">
            <div class="details">
              <p>· 熟悉常见http状态码</p>
              <p>· 了解不同请求类型的区别</p>
              <p>· 了解强制缓存与对比缓存的区别</p>
              <p>· 了解跨域常用方法</p>
              <span>HTTP</span>
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
