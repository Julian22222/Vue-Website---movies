import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import VueYouTubeEmbed from "vue-youtube-embed";
// import VueDOMPurifyHTML from "vue-dompurify-html";

const app = createApp(App);
app.use(router);
// app.use(VueDOMPurifyHTML);
// Vue.use(VueYouTubeEmbed);

app.mount("#app");

// or we can put this
// createApp(App).use(router).mount('#app')
