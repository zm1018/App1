// 这个store(仓库)文件夹是用vuex插件的地方,vuex主要是管理很多组件里都用的公共变量的插件,一个组件里修改了它里面定义的变量值,其它使用这个变量的组件里都变量值都自动改;

// 导入createStore构造函数来创建vuex实例对象
import { createStore } from 'vuex'

// 创建vuex实例对象并默认导出这个实例对象,这样所有组件文件都可以调用$store来使用定义在state属性对象里的数据变量了
export default createStore({
    // 这是定义变量的地方,写在这里的变量,所有组件都可以通过$store.state.变量名 使用,比组件间的父传子等数据传输方式方便多了,这里定义的变量值最好不要在用这个变量的各个组件里直接赋值修改,否则谁改的都不知道,万一出错都不好查
    state: {
        num: 6,
        uname: '我是定义在vuex插件里的变量: 张三'
    },
    // 这是修改变量值的地方,先定义方法的地方,方法里写修改state属性里定义的变量值的,这里修改变量值的方法在各个使用变量的组件里调用,能被浏览器上装的devtools插件跟踪修改记录,谁改的几点改的,改了哪里等...
    mutations: {
        // 定义一个修改变量值的方法,这里定义的函数会默认携带一个参数state,就是上面定义变量的属性state,方法定义好了就可以去各组件里通过调用this.$store.commit('addNum')修改vuex里定义的变量值了
        addNum(state) {
            // 修改num变量的值,每次给num变量加1
            state.num++
        },
        subNum(state) {
            state.num--
        }
    },
    actions: {},
    getters: {},
    modules: {}
})