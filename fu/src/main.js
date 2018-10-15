// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './common/rem';
import Vue from 'vue';
import App from './App';
import store from './store';
import { router } from './router';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1 //尝试加载次数
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})