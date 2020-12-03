// createApp方法接收的是根组件对象作为参数，并返回了一个有mount方法的应用实例对象。
import { createApp } from 'vue'
import App from './App.vue'


// 导入的是当前目录下的router文件夹时,它会自动导入这个文件夹里的index开头的文件,这里导入的是路由管理文件index.js
import router from './router'

// 导入vuex管理vue公共变量数据的插件
import store from './store'

// 导入axios发送异步请求的插件
// import './plugins/axios'
// import axios from 'axios'


// 调用createApp()创建dom元素(创建的是导入的app模板文件里写的template模板内容),调用.use()方法安装路由, 调用.mount()方法绑定index.html文件里写的给vue实例挂载用的id是app的div,因为el属性底层实现也是调用.mount()方法的,所以这里直接更简洁的使用了.mount()方法挂载,最终createApp()创建的dom元素会替换这个div,把dom元素都显示在div所在的位置,再把<router-link>标签to属性指定的路由组件里的dom元素显示在<view-router/>标签所在的位置;
createApp(App).use(router).use(store).mount('#app')