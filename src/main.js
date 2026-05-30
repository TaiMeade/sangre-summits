import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// Styles: Vuetify base + MDI icons, then Tailwind utilities + custom CSS.
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './assets/styles/main.css'

createApp(App).use(vuetify).mount('#app')
