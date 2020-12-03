<template>
  <div>
    购物车
    <!-- 使用vuex里定义的公共变量 -->
    <h1>{{$store.state.uname}}</h1>
    <h1>{{$store.state.num}}</h1>
    <button @click="add">点击修改vuex里定义的变量值++</button>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    add(){
      // 通过$store.commit()方法调用在vuex里我们自己定义的修改state属性里的变量值的函数,来修改公共变量,这里改,其它使用这个公共变量的组件里的变量值都会自动更新,commit()方法里传的参数是在vuex里自己定义的修改变量的函数名
      this.$store.commit('addNum')
    }
  },
}
</script>