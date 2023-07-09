// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import VueYouTubeEmbed from "vue-youtube-embed";
// import VueDOMPurifyHTML from "vue-dompurify-html";
// Vue.use(VueYouTubeEmbed);

const app = createApp(App);
app.use(router);
// app.use(VueDOMPurifyHTML);

app.mount("#app");

// or we can put this
// createApp(App).use(router).mount('#app')
