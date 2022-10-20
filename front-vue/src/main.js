import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 
import store from './store' 

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/css/main.css"

import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App);
app.use(router);
app.use(vuetify)
app.use(store);
app.mount('#app');
