// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import './assets/css/font.css'   //字体图标
import './assets/css/animate.css'  //css动画
import './assets/css/loading.css'  //加载动画

router.afterEach((to,from,nex)=>{
  window.scroll(0,0)
})
import $ from 'jquery';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
