import { createApp } from 'vue'
import store from './stores'
import App from './App.vue'
import router from './router'
import throttleClick from '@/directives'
import WOW from 'wow.js'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'wow.js/css/libs/animate.css'
import 'normalize.css/normalize.css'
import './assets/styles/main.less'
import 'virtual:uno.css'
import '@/utils/flexible'

const app = createApp(App)

new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true,
}).init()

app.use(store)
app.use(router)
app.use(throttleClick)

app.mount('#app')
