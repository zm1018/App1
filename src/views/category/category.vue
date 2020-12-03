<template>
  <div>
    分类
    <!-- <ul><li :key="item.id" v-for="item in data"></li></ul> -->
  </div>
</template>

<script>
// 演示在组件里使用axios发送网络请求,3种情况: 1.没有跨域限制的,2.有跨域限制需要设置反向代理的,3.没有跨域限制但有请求验证的
import axios from 'axios'
export default {
  name: 'Category',
  mounted () {
    // 后端配置好了cors(跨资源共享的意思)的发送ajax请求演示,这是请求魅力惠网站的轮播图数据,虽然是跨域的,但没有跨域限制,他们网站的后端设置了允许所有人请求数据,在response headers里有个Access-Control-Allow-Origin: *  ,这个*就表示所有通过浏览器直接发出去的请求都能成功访问到他们服务器的数据
    axios.get("http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5").then(res=>{
      console.log('这是请求的魅力惠网站的数据:',res.data.banners);
    }),

    /* 这是请求猫眼电影的热映影片列表,然后因为跨域原因报错has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource,跨域就是我发送请求的服务器ip地址和真正存数据的猫眼电影服务器ip地址https://m.maoyan.com是两个不同的地址,我是从浏览器直接发请求到服务器的,就会产生跨域问题,
    解决办法,在vue.config.js里设置反向代理,我这里发出去的请求把域名去掉,直接往自己的localhost:8080发请求,再通过配置的代理,让node这个服务端去转发我的请求,由node发请求给猫眼的服务器,因为node是服务端,不存在跨域问题 */
    /* axios.get('https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=511B48E0320511EBA59D2967791C3B3A33FB0A4BD5BA4782B5283AC61537B46D&optimus_risk_level=71&optimus_code=10').then(res=>{
      console.log(res.data.movieList);
    }) */
    axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=511B48E0320511EBA59D2967791C3B3A33FB0A4BD5BA4782B5283AC61537B46D&optimus_risk_level=71&optimus_code=10').then(res=>{
      console.log('这是请求的猫眼的数据:',res.data.movieList);
    }),

    /* 这是请求卖座电影的热映电影列表,虽然它的请求头中写了Access-Control-Allow-Origin: *,但还是报错跨域问题,因为它在请求时设置了特殊的请求头,找到request headers里的
    X-Client-Info: {"a":"3000","ch":"1002","v":"5.0.4","e":"1606650497614966302343169","bc":"110100"}
    X-Host: mall.film-ticket.film.list 这两个请求头,用来防止别人随便拿他的数据的,
    一个是发请求的验证字段,一个是要请求的是哪些数据,
    把这2个特殊的请求头作为参数写在axios请求里,因为它的请求头里写了 * ,谁都能访问,所以不用反向代理,直接发送就能成功请求到数据了
    */
    axios({
      url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5121673',
      headers: {
        // 它虽然谁都能跨域请求,但它设置了特殊的验证字段,所以要把这些发请求时的验证信息也一起发给卖座的服务器,就能成功请求数据了
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606650497614966302343169","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list"
      }
    }).then(res=>{
      console.log('这是请求的卖座的数据:',res.data.data.films);
    })
  }
}
</script>