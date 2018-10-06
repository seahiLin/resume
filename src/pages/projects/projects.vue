<template>
  <div class="page projects">
    <h1 class="title">项目经历</h1>
    <div class="project-container">
      <div class="project-item">
        <h4 class="title">个人主页</h4>
        <img src="../../assets/images/resume.png" alt="resume">
        <article>
          <p>个人主页简历网站（网站未完成备案，暂时不能通用域名访问）</p>
          <p>大量运用css3的知识对于内容增加了动画效果，主要使用flex做布局上的处理。
            并运用媒体查询做了响应式处理，对移动端做了适配。
          </p>
        </article>
        <button>
          <a href="https://github.com/seahiLin/resume">
            <img src="../../assets/icons/github.svg" alt="github">
          </a>
        </button>
      </div>
      <div class="project-item">
        <h4 class="title">知乎日报</h4>
        <img src="../../assets/images/知乎日报.png" alt="知乎日报">
        <article>
          <p>知乎日报是由知乎开发的一款精选文章，资讯阅读类App。</p>
          <p>本项目是运用vue+webpack等技术，利用知乎日报的接口开发的一款Web App。
            由于知乎日报的接口都有跨域限制，无法直接调用，因此使用了代理绕开限制。
            运用es6的语法，进行了模块化，组件化处理。
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

