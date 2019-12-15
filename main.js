import Vue from 'vue'
import App from './App'

import LbPicker from '@/components/lb-picker'
import UniIcons from '@/components/uni-icons/uni-icons'
Vue.component("lb-picker", LbPicker)
Vue.component("uni-icons", UniIcons)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
