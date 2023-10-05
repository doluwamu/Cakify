import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'

import { authConfig } from '@/utils/auth'

import './index.css'

const app = createApp(App)

app.use(authConfig)
app.use(createPinia())
app.use(router(app))

app.mount('#app')
