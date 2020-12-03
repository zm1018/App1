<template>
    <div class="tab-bar-item" @click="clickItem">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <!-- 这个插槽外面又包裹了一个div,就为了能用户点击这个组件时这个组件的字体改成红色,但html的结构变复杂了,就显示2个字,搞的2个字外面嵌套了2个div,这里一个,tabbar组件template标签里一个,
        解决办法,把tabbar组件里template标签里包裹文字的div删掉,直接用template标签包裹文字,这样这里的插槽替换那里的template标签,就剩插槽外层的这个动态绑定样式的div标签了,就成功解决了嵌套2层div的问题 -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>                
                      
    </div>
</template>


<script>
export default {
    name: 'TabBarItem',
    // 接收写在父组件文件里的子组件传来的参数link,传的是4个页面的路由
    props: {
        //接收link变量传过来的字符串hash值,给点击事件函数动态切换路由用
        link:String,
        // 动态切换的那个路由组件里的文字改成粉色(默认值),如果用户要改成其它颜色,在使用组件时写这个属性,把值赋成要改的颜色就行了
        activeColor: {
            type: String,
            default: '#FF5777'
        }
    },
    computed: {
        isActive(){
            // 因为这个子组件在tabbar里使用了4次,所以props属性接收的link变量会被赋4次值,分别是4个tabbaritem子组件上写的字符串路径,$route获取的是当前活跃的那个路由,取它里面的path值,如果path值里包含
            return this.$route.path.indexOf(this.link) !== -1
        },
        // 动态给处于活跃状态的item组件改字体颜色
        activeStyle() {         
            return this.isActive? {color: this.activeColor} : {}
        },
    },
    methods: {
        // 点击哪个item组件就加载对应的路由组件,这种是不带历史记录的
        clickItem(){
            this.$router.replace(this.link); 
        }
    },
    // 我想在这个路由活跃的item组件挂载完成时把这个处于活跃状态的组件字体颜色改成粉色,没成功,计算属性isActive得到的值一直是false,不知道为什么
    /* mounted() {         
        if(this.isActive) {
            document.querySelector('.tab-bar-item').setAttribute('style',`color:${this.color}`)
        }
    }, */
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  /* tab-bar都建议高度是49px */
  height: 49px;  
  font-size: 14px;
}

</style>