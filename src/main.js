import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);

app.mount("#app");

// or we can put this
// createApp(App).use(router).mount('#app')
