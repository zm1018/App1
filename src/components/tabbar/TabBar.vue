<!-- 作业,实现一个手机客户端的tab-bar菜单,这是tab-bar的根组件视图,要在App.vue文件里通过<router-view/>占位符显示到主页上 -->
<template>
  <div>
    <!-- 这个占位符是显示这4个item路由组件的 -->
    <router-view></router-view>
    <div id="tab-bar">
      <!-- 放4个子组件,每个子组件里2个具名插槽  -->
      <tab-bar-item link="/home">
        <!-- vue2.6版本开始具名插槽就废弃了<div slot="插槽名"></div>这种写法,改成了插槽名写在<template v-slot:item-text></template>标签上,属性后面是:不是=,而且属性值不能有空格和'',可以把v-slot简写成#号 -->
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-icon-active>      
          <img src="@/assets/img/tabbar/home_active.svg" alt="">        
        </template>
        <!-- 找到解决就这2个文字要点击的时候变成粉色样式会嵌套2个div的方法了,把template标签里这个div去掉,直接用template标签包裹文字,这样在item组件的插槽外面包裹一个div会替换这里的template标签,就能变成一个div包裹2个字了,html结构就能少一层div标签,变简单些,
        <template v-slot:item-text><div>首页</div></template>

        如果我这里不是用插槽,而是用<router-link>这种声明是导航,来加载路由,就可以使用这个标签的一个特点,就是会自动给处于活跃的路由组件在渲染成dom标签时加一个class类名,直接用这个类名来设置活跃的路由组件变颜色就行了
         -->
        <template v-slot:item-text>首页</template>
      </tab-bar-item>

      <!-- 也可以点击这个item组件的时候文字变成其它颜色,只要在这个item组件上重新给修改颜色的变量activeColor赋值就行,例如:把分类这2个字改成蓝色 -->
      <tab-bar-item link="/category" activeColor="blue">
        <!-- v-slot指令简写成 # -->
        <template #item-icon>
          <img src="@/assets/img/tabbar/category.svg" alt="">       
        </template>
        <template v-slot:item-icon-active>      
          <img src="@/assets/img/tabbar/category_active.svg" alt="">        
        </template>
        <template v-slot:item-text>分类</template>
      </tab-bar-item>

      <tab-bar-item link="/cart">
        <template v-slot:item-icon>      
          <img src="@/assets/img/tabbar/cart.svg" alt="">
        </template>
        <template v-slot:item-icon-active>      
          <img src="@/assets/img/tabbar/cart_active.svg" alt="">        
        </template>
        <template v-slot:item-text>购物车</template>
      </tab-bar-item>

      <tab-bar-item link="/profile">
        <template v-slot:item-icon>      
          <img src="@/assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-icon-active>      
          <img src="@/assets/img/tabbar/profile_active.svg" alt="">        
        </template>
        <template v-slot:item-text>我的</template>
      </tab-bar-item>
    </div> 
  </div>
</template>

<script>
// 导入TabBarItem子组件
import TabBarItem from './TabBarItem.vue'

export default {
  name: 'TabBar',
  components: {
    TabBarItem
  }
}
</script>

<style  scoped>

#tab-bar {
  /* 用flex布局 */
  display: flex;
  /* 固定定位到页面最底部 */
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: #dadada;
  /* 阴影,水平0,垂直方向上阴影1,模糊程度5,阴影大小1,颜色黑色透明0.1 */
  box-shadow: 0px -1px 5px 1px rgba(0, 0, 0, .1);
}
/* 因为用的是具名插槽,这个设置图片的样式写在子组件里不起效果,写在根组件这里才能生效,目前还不知道怎么解决,先这样,后面学到了再改 */
.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    /* 去掉图片和文字中间的空隙 */
    vertical-align: middle;
}

</style>