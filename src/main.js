// import Vue from 'vue'
import App from './App.vue'
import router from './router'
// importación de los componentes propios

// import Botones from './components/Boton.vue'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

new Vue({
  BootstrapVue,
  router,
  render: h => h(App)
}).$mount('#app')
