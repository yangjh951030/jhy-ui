import Vue from 'vue'
import App from './App.vue'
import jhyModal from '../UI/modal/index'

Vue.prototype.$Modal  =  jhyModal.install;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
