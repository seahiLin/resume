<template>
  <div class="app" ref="app" @touchmove="touchmove" @touchend="touchend">
    <languageSwitcher />
    <navigator :page="currentPage" @linkTo="linkTo" />
    <introduction
      :class="{
        currentPage: currentPage === 0,
        prePage: currentPage > 0,
        nextPage: currentPage < 0
      }"
    />
    <skills
      :class="{
        currentPage: currentPage === 1,
        prePage: currentPage > 1,
        nextPage: currentPage < 1
      }"
    />
    <personalSummary
      :class="{
        currentPage: currentPage === 2,
        prePage: currentPage > 2,
        nextPage: currentPage < 2
      }"
    />
  </div>
</template>

<script>

import languageSwitcher from './components/languageSwitcher';
import navigator from './components/navigator';
import introduction from './pages/introduction/introduction';
import skills from './pages/skills/skills';
import personalSummary from './pages/personalSummary/personalSummary';

export default {
  name: 'App',
  data() {
    return {
      currentPage: 0
    }
  },
  methods: {
    linkTo(page) {
      this.currentPage = page;
    },
    touchmove (e) {
      e.preventDefault();
      if (this.touchStartX !== 0) return;
      this.touchStartX = e.changedTouches[0].screenY;
    },
    touchend (e) {
      e.preventDefault();

      if (this.touchStartX === 0) return;

      const touchEndX = e.changedTouches[0].screenY;

      if (this.scrollingLock) return;

      if (this.touchStartX - touchEndX > 80) {
        this.scrollingLock = true;

        setTimeout(() => {
          this.scrollingLock = false;
        }, 700)

        if (this.currentPage === 2) return;
        else this.currentPage++;
      } else if (this.touchStartX - touchEndX < -80) {
        this.scrollingLock = true;

        setTimeout(() => {
          this.scrollingLock = false;
        }, 700)

        if (this.currentPage === 0) return;
        else this.currentPage--;
      }

      this.touchStartX = 0;
    }
  },
  mounted() {
    // stop default scrolling event
    // add customized scrolling event
    this.$refs.app.onmousewheel = (e) => {
      e.stopPropagation();
      e.preventDefault();

      if (this.scrollLock) return;

      if(e.wheelDelta < 0) {
        this.scrollLock = true;
        setTimeout(() => {
          this.scrollLock = false;
        }, 500)

        if(this.currentPage === 2) return;
        this.currentPage++;
      }else if (e.wheelDelta > 0) {
        this.scrollLock = true;
        setTimeout(() => {
          this.scrollLock = false;
        }, 500)

        if (this.currentPage === 0) return;
        this.currentPage--;
      }
    }
  },
  components: {
    introduction,
    skills,
    personalSummary,
    navigator,
    languageSwitcher
  }
}
</script>

<style lang="less">
@import './assets/styles/common.less';
@import './assets/styles/reset.less';
@import './assets/styles/app.less';
@import './assets/iconfonts/iconfont.css';
</style>

