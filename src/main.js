import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './components/App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(BaiduMap, { ak: 'XhLjiuRGtvb1yc7WoG4AkziwyoZjEMk3' })

new Vue({
  render: h => h(App),
}).$mount('#app')
