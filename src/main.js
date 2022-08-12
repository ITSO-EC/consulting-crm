import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import './css/style.css'

const app = createApp(App)
app.config.globalProperties.companyOne = 'Consulting';
app.config.globalProperties.companyTwo = 'Lexi';
app.use(router)
app.mount('#app')
