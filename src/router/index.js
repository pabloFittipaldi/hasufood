import { createRouter, createWebHistory } from "vue-router";
import inicio from "../views/HomeView.vue";
import productos from "../views/productosView.vue";
import nosotros from "../views/nosotrosView.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: inicio,
  },
  {
    path: "/productos",
    name: "productos",
    component: productos,
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: nosotros,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
