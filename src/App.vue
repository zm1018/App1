<!-- 作业,实现一个手机客户端的tab-bar菜单,
创建一个vue实例分成了3个文件,App.vue,index.js,main.js;
这个文件里没写js代码,是把vue实例这个根组件的视图写在这里,和路由和js逻辑代码分离的写法,路由写在router文件夹index.js文件里了,导入vue包和vue实例里的挂载渲染安装路由功能都写在main.js里了 -->
<template>
<!-- 这个占位符是显示tabbar路由组件的 -->
  <router-view></router-view>
</template>

<style>
/* 在style标签里导入css文件要在import前面加@,这里导入公共css样式文件 */
@import './assets/css/base.css';

</style> 
