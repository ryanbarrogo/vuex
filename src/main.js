import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store/store'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
