<template>
  <div>
    我的
  </div>
</template>

<script>
export default {
  name: 'Profile',
  // 演示局部路由守卫,可以不登录就访问这个页面,但再访问这个页面里的所有子组件时,都要先拦截,检查用户访问我的页面时是否是登录状态,如果是登录状态就可以访问,如果不是,就跳转到login页面,让用户先登录
  beforeRouteEnter(to,from,next) {
    if(!localStorage.getItem('token')){
      next('/login')
    }else{
      next()
    }
  }
}
</script>