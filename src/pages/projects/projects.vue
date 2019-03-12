<template>
  <div class="page projects">
    <h3 class="title">项目经历</h3>
    <div class="project-container">
      <div class="project-item">
        <h5 class="title">个人主页</h5>
        <img src="../../assets/images/resume.png" alt="resume">
        <article>
          <p>个人主页简历网站</p>
          <p>项目大量运用css3动画方面的知识对于主体内容应用了动画效果，主要使用flex做布局上的处理。
            利用.vue单文件形式和es6的模块化进行组件化的开发（抽象封装了一个可复用的圆环型进度条动画组件）。
            并运用媒体查询和rem等知识对页面做了响应式处理，对移动端做了适配。
          </p>
        </article>
        <button>
          <a href="https://github.com/seahiLin/resume">
            <img src="../../assets/icons/github.svg" alt="github">
          </a>
        </button>
      </div>
      <div class="project-item">
        <h5 class="title">知乎日报</h5>
        <img src="../../assets/images/知乎日报.png" alt="知乎日报">
        <article>
          <p>知乎日报是由知乎开发的一款精选文章，资讯阅读类App。</p>
          <p>本项目是运用vue+webpack等技术，利用知乎日报的接口开发的一款Web App。
            由于直接调用知乎接口存在跨域限制，因此使用了中间代理绕开限制（url地址使用本地路径，
            再由中间代理转发到真实地址）。
          </p>
        </article>
        <button>
          <a href="https://github.com/seahiLin/zhihunews">
            <img src="../../assets/icons/github.svg" alt="github">
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import './projects.less';
</style>

