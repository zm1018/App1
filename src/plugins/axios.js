// 不会用这个插件,暂时先注释掉,免得报错
/* "use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

Plugin.install = function(Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};

Vue.use(Plugin)

export default plugin; */


// import { App } from "vue";
// import axiosObj, { AxiosInstance, AxiosRequestConfig } from "axios";
// import store from "../store/index";

// const defaultConfig = {
//     // baseURL在此处省略配置,考虑到项目可能由多人协作完成开发，域名也各不相同，此处通过对api的抽离，域名单独配置在base.js中

//     // 请求超时时间
//     timeout: 60 * 1000,
//     // 跨域请求时是否需要凭证
//     // withCredentials: true, // Check cross-site Access-Control
//     heards: {
//         get: {
//             "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
//                 // 将普适性的请求头作为基础配置。当需要特殊请求头时，将特殊请求头作为参数传入，覆盖基础配置
//         },
//         post: {
//             "Content-Type": "application/json;charset=utf-8"
//                 // 将普适性的请求头作为基础配置。当需要特殊请求头时，将特殊请求头作为参数传入，覆盖基础配置
//         }
//     }
// };

// /**
//  * 请求失败后的错误统一处理，当然还有更多状态码判断，根据自己业务需求去扩展即可
//  * @param status 请求失败的状态码
//  * @param msg 错误信息
//  */
// const errorHandle = (status: number, msg: string) => {
//     // 状态码判断
//     switch (status) {
//         // 401: 未登录状态，跳转登录页
//         case 401:
//             // 跳转登录页
//             break;
//             // 403 token过期
//         case 403:
//             // 如果不需要自动刷新token，可以在这里移除本地存储中的token，跳转登录页

//             break;
//             // 404请求不存在
//         case 404:
//             // 提示资源不存在
//             break;
//         default:
//             console.log(msg);
//     }
// };

// export default {
//     // 暴露安装方法
//     install(app: App, config: AxiosRequestConfig = defaultConfig) {
//         let _axios: AxiosInstance;

//         // 创建实例
//         _axios = axiosObj.create(config);
//         // 请求拦截器
//         _axios.interceptors.request.use(
//             function(config) {
//                 // 从vuex里获取token
//                 const token = store.state.token;
//                 // 如果token存在就在请求头里添加
//                 token && (config.headers.token = token);
//                 return config;
//             },
//             function(error) {
//                 // Do something with request error
//                 error.data = {};
//                 error.data.msg = "服务器异常";
//                 return Promise.reject(error);
//             }
//         );
//         // 响应拦截器
//         _axios.interceptors.response.use(
//             function(response) {
//                 // 清除本地存储中的token,如果需要刷新token，在这里通过旧的token跟服务器换新token，将新的token设置的vuex中
//                 if (response.data.code === 401) {
//                     localStorage.removeItem("token");
//                     // 页面刷新
//                     parent.location.reload();
//                 }
//                 // 只返回response中的data数据
//                 return response.data;
//             },
//             function(error) {
//                 if (error) {
//                     // 请求已发出，但不在2xx范围内
//                     errorHandle(error.status, error.data.msg);
//                     return Promise.reject(error);
//                 } else {
//                     // 断网
//                     return Promise.reject(error);
//                 }
//             }
//         );
//         // 将axios挂载到vue的全局属性中
//         app.config.globalProperties.$axios = _axios;
//     }
// };