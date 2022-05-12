import { createApp } from 'vue'
import './styles/root.scss'
import App from './App.vue'
import styComponents from './components/index'

const app = createApp(App)

Object.keys(styComponents).forEach((component) => {
    app.component(styComponents[component].name, styComponents[component])
})

app.mount('#app')
