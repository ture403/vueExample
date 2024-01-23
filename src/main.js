import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import router from './router'

const app = createApp(App)

// app.use(router)
app.use(store)
app.use(router)
app.mount('#app')
