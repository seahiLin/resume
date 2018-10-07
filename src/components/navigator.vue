<template>
  <div class="nav-container">
    <button 
      :class="{'active-link': page === 0}"
      @click="linkTo(0)"
    >
      <img src="../assets/icons/个人信息.svg" alt="个人信息">
    </button>
    <button 
      :class="{'active-link': page === 1}"
      @click="linkTo(1)"
    >
      <img src="../assets/icons/专业知识技能.svg" alt="技能">
    </button>
    <button 
      :class="{'active-link': page === 2}"
      @click="linkTo(2)"
    >
      <img src="../assets/icons/项目管理.svg" alt="项目">
    </button>
  </div>
</template>

<script>
export default {
  name: "navigator",
  props: {
    page: {
      type: Number,
      default: 0
    }
  },
  methods: {
    linkTo(page) {
      this.$emit('linkTo', page);
    }
  }
};
</script>

<style lang="less">
.nav-container {
  width: 50px;
  position: absolute;
  right: 50px;
  top: 50%;
  margin-top: -120px;
  z-index: 10;

  button {
    width: 50px;
    height: 50px;
    background-color: transparent;
    overflow: hidden;
    border-radius: 50%;
    text-align: center;
    margin-bottom: 30px;
    cursor: pointer;

    .active-link {
      border: 1px solid #fff;
    }

    img {
      width: 90%;
      height: 90%;
      vertical-align: middle;
    }
  }
}

@media (max-width: 430px) {
  .nav-container {
    display: none;
  }
}
</style>

