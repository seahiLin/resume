<template>
  <div class="app" @touchmove="touchmove" @touchend="touchend">
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
    <projects
      :class="{
        currentPage: currentPage === 2,
        prePage: currentPage > 2,
        nextPage: currentPage < 2
      }"
    />
  </div>
</template>

<script>

import navigator from './components/navigator';
import introduction from './pages/introduction/introduction';
import skills from './pages/skills/skills';
import projects from './pages/projects/projects';

export default {
  name: 'App',
  data() {
    return {
      currentPage: 0,
      routes: [
        {
          pageIndex: 0,
          name: 'introduction'
        },
        {
          pageIndex: 1,
          name: 'skills'
        },
        {
          pageIndex: 1,
          name: 'projects'
        }
      ]
    }
  },
  methods: {
    linkTo(page) {
      this.currentPage = page;
    },
    touchmove (e) {
      e.preventDefault()
      if (this.touchStartX !== 0) return
      this.touchStartX = e.changedTouches[0].screenY
    },
    touchend (e) {
      e.preventDefault()

      if (this.touchStartX === 0) return

      const touchEndX = e.changedTouches[0].screenY

      if (this.scrollingLock) return

      if (this.touchStartX - touchEndX > 80) {
        this.scrollingLock = true

        setTimeout(() => {
          this.scrollingLock = false
        }, 700)

        if (this.currentPage === this.routes.length - 1) return
        else this.currentPage++
      } else if (this.touchStartX - touchEndX < -80) {
        this.scrollingLock = true

        setTimeout(() => {
          this.scrollingLock = false
        }, 700)

        if (this.currentPage === 0) return
        else this.currentPage--
      }

      this.touchStartX = 0
    }
  },
  mounted() {
    // stop default scrolling event
    // add customized scrolling event
    window.onmousewheel = (e) => {
      e.stopPropagation();
      e.preventDefault();

      if (this.scrollLock) return;

      if(e.wheelDelta < 0) {
        this.scrollLock = true;
        setTimeout(() => {
          this.scrollLock = false;
        }, 500)

        if(this.currentPage === this.routes.length - 1) return;
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
    projects,
    navigator
  }
}
</script>

<style lang="less">
@import './assets/styles/common.less';
@import './assets/styles/reset.less';
@import './assets/styles/app.less';
</style>

