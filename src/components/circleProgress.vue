<template>
  <div class="circle-progress">
    <div class="wrapper left">
      <div class="circle" :class="{ leftcircle : hoverBoolean }" ref="circleLeft"></div>
    </div>
    <div class="wrapper right">
      <div class="circle" :class="{ rightcircle : hoverBoolean }" ref="circleRight"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'skills',
  props: {
    progress: {
      type: Number,
      default: 0
    },
    hoverBoolean: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    initAnimation() {
      let circleLeft = this.$refs.circleLeft;
      let circleRight = this.$refs.circleRight;
      
      if (!this.hoverBoolean) {
        circleLeft.removeAttribute('style');
        circleRight.removeAttribute('style');
        return;
      }
      
      switch (this.progress) {
        case 0 : {
          break;
        };
        case 25 : {
          circleLeft.style.animationName = 'circleProgress_left_50';
          break;
        };
        case 50 : {
          circleLeft.style.animationName = 'circleProgress_left_100';
          break;
        };
        case 75 : {
          circleLeft.style.animationName = 'circleProgress_left_100';
          circleRight.style.animationName = 'circleProgress_right_50';
          break;
        };
        case 100 : {
          circleLeft.style.animationName = 'circleProgress_left_100';
          circleRight.style.animationName = 'circleProgress_right_100';
          break;
        };
      }
    },
    // addClass(el, clsName) {
    //   if (this.hasClass(el, clsName)) {
    //     return;
    //   }
    //   let newCls = el.className.split(' ');
    //   newCls.push(clsName);
    //   el.className = newCls.join(' ');
    // },
    // hasClass(el, clsName) {
    //   let reg = new RegExp('(^|\\s)' + clsName + '(\\s|$)');
    //   return reg.test(el.className)
    // },
    // deleteClass(el, clsName) {
    //   if(!this.hasClass(el, clsName)) {
    //     return;
    //   }
    //   let newCls = el.className.split(' ');
    //   for (let i in newCls) {
    //     if (newCls[i] === clsName) {
    //       newCls.splice(i, 1);
    //       el.className = newCls;
    //     }
    //   }
    // },
    // initClass() {
    //   if (this.hoverBoolean) {
    //     this.addClass(this.$refs.circleLeft, 'leftcircle');
    //     this.addClass(this.$refs.circleRight, 'rightcircle');
    //   }else {
    //     this.deleteClass(this.$refs.circleLeft, 'leftcircle');
    //     this.deleteClass(this.$refs.circleRight, 'rightcircle');
    //   }
    // }
  },
  mounted() {
    // 
  },
  watch: {
    hoverBoolean: 'initAnimation'
  }
}
</script>

<style lang="less">
.circle-progress {
  width: 280px;
  height: 280px;
  position: relative;
  margin: 25px 70px;

  .wrapper {
    width: 140px;
    height: 280px;
    position: absolute;
    overflow: hidden;

    .circle {
      width: 260px;
      height: 260px;
      border: 10px solid transparent;
      border-radius: 50%;
      position: absolute;
      top: 0;
      box-sizing: content-box;
      transform: rotate(-45deg);
      transition: all 1s linear;
    }
  }

  .left {
    left: 0;

    .leftcircle {
      border-top: 10px solid #baf8ba;
      border-left: 10px solid #baf8ba;
      left: 0;
      // transform: rotate(-225deg);
      animation-name: circleProgress_left_0;
      animation-duration: 1s;
      animation-timing-function: linear;
      
      // animation: circleProgress_left_0 1s linear;
      animation-fill-mode: forwards;

      @keyframes circleProgress_left_100 {
        0% {
          transform: rotate(-225deg);
        }
        50% {
          transform: rotate(-45deg);
        }
        100% {
          transform: rotate(-45deg);
        }
      }
      @keyframes circleProgress_left_50 {
        0% {
          transform: rotate(-225deg);
        }
        50% {
          transform: rotate(-135deg);
        }
        100% {
          transform: rotate(-135deg);
        }
      }
      @keyframes circleProgress_left_0 {
        0% {
          transform: rotate(-225deg);
        }
        50% {
          transform: rotate(-225deg);
        }
        100% {
          transform: rotate(-225deg);
        }
      }
      
    }
  }

  .right {
    right: 0;

    div {
      right: 0;
    }

    .rightcircle {
      border-bottom: 10px solid #baf8ba;
      border-right: 10px solid #baf8ba;
      right: 0;
      // transform: rotate(-225deg);
      // animation: circleProgress_right_0 1s linear;
      animation-name: circleProgress_right_0;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;

      @keyframes circleProgress_right_100 {
        0% {
          transform: rotate(-225deg);
        }
        50% {
          transform: rotate(-225deg);
        }
        100% {
          transform: rotate(-45deg);
        }
      }
      @keyframes circleProgress_right_50 {
        0% {
          transform: rotate(-225deg);
        }
        50% {
          transform: rotate(-225deg);
        }
        100% {
          transform: rotate(-135deg);
        }
      }
      @keyframes circleProgress_right_0 {
        0% {
          transform: rotate(-225deg);
        }
        50% {
          transform: rotate(-225deg);
        }
        100% {
          transform: rotate(-225deg);
        }
      }
    }
  }
}

@media (max-width: 430px) {
  .circle-progress {
    width: 140px;
    height: 140px;
    margin: 0 10px 10px 10px;

    .wrapper {
      width: 70px;
      height: 140px;

      .circle {
        width: 120px;
        height: 120px;
      }
    }
  }
}
</style>

