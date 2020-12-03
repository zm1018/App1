<template>
  <div>
    首页
    <!-- 使用vuex里定义的公共变量 -->
    <h1>{{$store.state.uname}}</h1>
    <h1>{{$store.state.num}}</h1>
    <button @click="sub">点击修改vuex里定义的变量值--</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    // 鼠标点击按钮触发这个事件函数,修改vuex里定义的变量num的值,在事件函数里调用在vuex里定义的修改变量的函数来修改变量值,这里的事件函数只是调用vuex里定义的那个修改变量的函数,这样修改的变量会被浏览器的devtools插件跟踪每次修改记录,方便找到是哪个组件修改的,什么时候修改的等等...
    sub(){
      this.$store.commit('subNum')
    }
  },
}
</script>
