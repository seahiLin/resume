<template>
  <div class="page introduction">
    <div class="avatar">
      <img src="../../assets/images/IMG_1306.jpg" alt="">
    </div>
    <h1 class="name">{{$t("introduction.name")}}</h1>
    <p class="description">{{$t("introduction.description")}}</p>
    <div class="information">
      <span class="iconfont iconicon_shengri"> {{$t("introduction.birthday")}}</span>
      <span class="iconfont iconyixiangfuwushang_huaban">{{$t("introduction.intentionalWork")}}</span>
      <span class="iconfont iconxuexiao1">{{$t("introduction.graduatedSchool")}}</span>
      <span class="iconfont icondianhua">{{$t("introduction.telephoneNumber")}}</span>
      <span class="iconfont iconyoujian1">{{$t("introduction.email")}}</span>
    </div>
    <footer>
      <img src="../../assets/icons/箭头3.svg" alt="下拉">
    </footer>
  </div>
</template>

<style lang="less" scoped>
@import 'introduction.less';
</style>
