import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import { VueMasonryPlugin } from 'vue-masonry/src/masonry.plugin';
import '@/assets/styles/main.scss'
const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(VueMasonryPlugin)
app.use(router)

app.mount('#app')
