<template>
  <div class="languageSwitcher" @click="changeLanguage">
    <img class="langCN" src="../assets/icons/中文符号.png" alt="中文">
    <img class="langEN" src="../assets/icons/英文符号.png" alt="English">
  </div>
</template>

<script>
export default {
  name: "languageSwitcher",
  methods: {
    changeLanguage() {
      let lang = window.localStorage.lang || 'cn';
      window.localStorage.lang = (lang === 'cn') ? 'en' : 'cn';
      this.$i18n.locale = window.localStorage.lang;
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

    &.langCN {
      backface-visibility: hidden;
    }

    &.langEN {
      backface-visibility: hidden;
      transform: rotateY(180deg);
    }
  }
}
</style>
