import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import TopMovies from "@/views/TopMovies.vue";
import MovieCard from "./views/MovieCard.vue";
import Favorites from "./views/Favorites.vue";
import Enquiries from "./views/Enquiries.vue";
import NotFound from "./views/NotFound.vue";
// import Home from "@/views/Home";
const routes = [
  {
    path: "/Vue-Website---movies/",
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
    path: "/favorites",
    name: "favorites",
    component: Favorites,
  },
  {
    path: "/enquiries",
    name: "enquiries",
    component: Enquiries,
  },
  {
    path: "/:id",
    name: "movieCard",
    component: MovieCard,
    props: true,
  },
  //redirects
  // {
  //   path: "home",
  //   redirect: "/",
  // },
  //catch all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
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
