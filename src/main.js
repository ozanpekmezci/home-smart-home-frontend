import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(VueChartkick, { adapter: Chart })

new Vue({
  render: h => h(App),
}).$mount('#app')
