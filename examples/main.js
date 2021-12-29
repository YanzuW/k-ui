import Vue from 'vue'
import App from './App.vue'
import KUI from '../packages'

Vue.config.productionTip = false
Vue.use(KUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
