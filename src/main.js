import Vue from 'vue'
import App from './App.vue'
import VueExcelEditor from 'vue-excel-editor'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueExcelEditor)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
