<template>
  <div class="languageSwitcher"
    @click="changeLanguage">
    <img class="langCN" src="../assets/icons/中文符号.png" alt="中文"
      :class="lang === 'cn' ? 'on' : 'off'">
    <img class="langEN" src="../assets/icons/英文符号.png" alt="English"
      :class="lang === 'en' ? 'on' : 'off'">
  </div>
</template>

<script>
export default {
  name: "languageSwitcher",
  data () {
    return {
      lang: window.localStorage.lang
    }
  },
  methods: {
    changeLanguage() {
      window.localStorage.lang = (this.lang === 'cn') ? 'en' : 'cn';
      this.$i18n.locale = this.lang = window.localStorage.lang;
    }
  }
}
</script>

<style lang="less">
.languageSwitcher {
  position: absolute;
  right: 0.5rem;
  top:  0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  z-index: 10;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    transition: 0.3s ease-in-out;

    &.on {
      transform: rotateY(0);
    }

    &.off {
      transform: rotateY(180deg)
    }
  }
}
</style>
