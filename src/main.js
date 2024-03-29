import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
