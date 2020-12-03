// 这个文件是管理所有路由文件的,是vue-router4版本的写法
// 导入路由这个包,这是hash模式的
// import { createRouter, createWebHashHistory } from 'vue-router'
// 这是history模式的
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

// 导入tab-bar这个根组件
import TabBar from '@/components/tabbar/TabBar.vue'

/* 导入tabbar要用的4个子路由组件,这是路由懒加载的写法,使用时才会加载这个路由组件,而且打包后会单独生成一个js文件,不会都打包到一个出口js文件里,2种写法:
写在导入这里,或直接写在路由配置对象里,
例如:component: () => import ('../views/category/category.vue'),
路由路径webpack里配置过给路径取别名,所以src文件夹可以直接简写成别名@,
如果几个组件来实现一个完整页面功能的,可以在import()括号里写注释,写在这里的注释代码会被执行,把它们分成一个组,这样打包后它们会合并生成一个js文件,例如:*/
// component: () => import (/* webpackChunkName: "这个组的名字,例如group-foo" */ '@/views/cart/cart.vue'),
// component: () => import (/* webpackChunkName: "group-foo" */ '@/views/home/home.vue'),  这个home和cart组件就会打包到一个js文件里


const Home = () =>
    import ('@/views/home/home.vue')
const Category = () =>
    import ('@/views/category/category.vue')
const Cart = () =>
    import ('@/views/cart/cart.vue')
const Profile = () =>
    import ('@/views/profile/profile.vue')
const Login = () =>
    import ('@/views/login/login.vue')

// 把路由配置对象定义在外面,等下直接在路由实例里写这个变量名就行了,路由实例里的结构就更简单了
const routes = [
    // App.vue文件里加载跟路由时显示tab-bar组件
    {
        path: '/',
        name: 'TabBar',
        component: TabBar,
        // 加载tabbar时重定向到home子路由,这样用户访问根路由就显示home页面
        redirect: '/home',
        // 嵌套路由
        children: [{
                path: '/home',
                component: Home
            },
            {
                path: '/category',
                component: Category
            },
            {
                path: '/cart',
                component: Cart
            },
            {
                path: '/profile',
                component: Profile
            },
            {
                path: '/login',
                component: Login
            }
        ]
    }
]

// 创建路由实例
const router = createRouter({
    //这是vue-router4版本的hash模式,如果history模式这么写:history: createWebHistory(process.env.BASE_URL),但要先在vue.config.js文件夹里配置公共路径
    // history: createWebHashHistory(),
    // history历史模式的
    history: createWebHistory(),
    // 把外面定义的路由配置对象变量写在路由实例里
    routes
})

// 演示在这里设置全局的路由守卫,来拦截没有登录的用户访问profile页面,如果很多组件都要授权才能访问,(例如:登录才能访问),就写全局的路由守卫,如果只有某个组件需要拦截,可以去组件里写局部路由守卫
/* router.beforeEach((to, from, next) => {
    // 把要拦截的路由都写在列表里,可以写多个,写在这里面的都会被拦截验证
    let auth = ['/profile']
        // 判断用户访问的那个路由,拦截数组auth里有没有包含,有就拦截,参数to里有个fullpath是获取要跳转的路由的
    if (auth.includes(to.fullPath)) {
        // console.log('验证tooken的页面,先登录带着Tooken再来访问');
        // 如果去localStorage里拿不到token,就跳转到login页面,让用户登录
        if (!localStorage.getItem('token')) {
            next('/login')
        } else {
            // 否则就是有token,表示用户登录了,就让用户访问
            next()
        }
    } else {
        // 必需要调用next(),否则所有路由都无法跳转了
        next()
    }
}) */


// 导出路由实例对象
export default router