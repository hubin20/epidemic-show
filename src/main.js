import Vue from 'vue'
import App from './App.vue'
import "./assets/css/common.css"
import router from './router'
import Echarts from './plugins/echarts'
import '../node_modules/echarts/map/js/china'
import '../node_modules/echarts/map/js/world'
import Tabs from './components/tabs'

Vue.config.productionTip = false

Vue.use(Echarts)
Vue.use(Tabs)

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
