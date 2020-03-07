import Vue from 'vue'
import App from './App'

import LbPicker from './components/lb-picker'
Vue.component('lb-picker', LbPicker)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
