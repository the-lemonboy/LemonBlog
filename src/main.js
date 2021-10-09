import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/styls/main.scss'
import SimplePlugin from './utils/SimplePlugin'
/* 引入axios */
import axios from 'axios'
import VueAxios from 'vue-axios'
/* 引入mavon-editor */
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.prototype.$axios = axios;

/* element-ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/* icon */
import icon from './assets/icon/iconfont.css'
import iconJs from './assets/icon/iconfont.js'
Vue.use(VueAxios, axios)
Vue.use(mavonEditor)
Vue.use(ElementUI);
Vue.use(SimplePlugin)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
});



new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    this.$changeTheme(store.getters['Theme/currentTheme'] || undefined)
  }
}).$mount('#app')
