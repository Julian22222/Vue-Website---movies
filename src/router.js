// import Vue from "vue";
// import { createRouter, createWebHistory } from "vue-router";
// import Home from "./views/Home.vue";
// import TopMovies from "./views/TopMovies.vue";
// // import Home from "@/views/Home";
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       //   when we on "/" we will render Home component
//       component: Home,
//     },
//     {
//       path: "/top",
//       name: "top",
//       component: TopMovies,
//     },
//   ],
// });

// export default router;
/////////////////////////////////////////////////////////////////////

import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import TopMovies from "@/views/TopMovies.vue";
import MovieCard from "./views/MovieCard.vue";
// import Home from "@/views/Home";
const routes = [
  {
    path: "/",
    name: "home",
    //   when we on "/" we will render Home component
    component: Home,
  },
  {
    path: "/top",
    name: "top",
    component: TopMovies,
  },
  {
    path: "/:id",
    name: "movieCard",
    component: MovieCard,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

//////////////////////////////////////////////////////
// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   routes: [
//     {
//       path: "/",
//       component: Home,
//     },
//     {
//       path: "/todos",
//       component: () => import("./views/Todos.vue"),
//     },
//   ],
// });
