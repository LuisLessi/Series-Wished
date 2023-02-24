import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';
import axios from 'axios';


import './assets/scss/app.scss'


const app = createApp(App)
app.config.globalProperties.axios = axios; // define uma instância global do Axios

app.use(store)

app.use(router)

app.mount('#app')
