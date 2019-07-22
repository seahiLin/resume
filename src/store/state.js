const state = {
  skills: [
    {
      name: 'HTML',
      imgsrc: require('@/assets/icons/h5.svg'),
      progress: 75,
      details: [
        '了解html渲染解析知识',
        '熟悉html布局,了解响应式布局',
        '对于语义化标签有一定认识'
      ]
    },
    {
      name: 'CSS',
      imgsrc: require('@/assets/icons/css3.svg'),
      progress: 75,
      details: [
        '基础样式与布局编写',
        '对于css盒模型与BFC有一定理解',
        '熟悉css3动画'
      ]
    },
    {
      name: 'JS',
      imgsrc: require('@/assets/icons/js.svg'),
      progress: 75,
      details: [
        '熟悉js原型及继承知识',
        '了解冒泡机制及事件委托',
        '熟悉DOM操作',
        '对ES6有一定了解及实践'
      ]
    },
    {
      name: 'VUE',
      imgsrc: require('@/assets/icons/vue.svg'),
      progress: 50,
      details: [
        '熟悉生命周期钩子函数',
        '了解组件通信方法',
        '熟悉vue-router',
        '对数据双向绑定有一定认识'
      ]
    },
    {
      name: 'Webpack',
      imgsrc: require('@/assets/icons/webpack.svg'),
      progress: 25,
      details: [
        '了解webpack常用配置',
        '了解模块化，组件化开发'
      ]
    },
    {
      name: 'HTTP',
      imgsrc: require('@/assets/icons/http.svg'),
      progress: 25,
      details: [
        '熟悉常见http状态码',
        '了解不同请求类型的区别',
        '了解强制缓存与对比缓存的区别',
        '了解跨域常用方法'
      ]
    }
  ],
  summary: [
    {
      name: '技术栈',
      path: '/technologyStack'
    }
  ]
};

export default state;
