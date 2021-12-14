import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Components from "./components/UI"

const app = createApp(App)
Object.keys(Components).forEach((name) => {
  app.component(name, Components[name])
})

app.use(store).use(router).mount("#app")
