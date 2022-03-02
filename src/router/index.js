import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projets from "../views/Projets.vue";
import About from "../views/About.vue";
import ProjetDetail from "../views/ProjetDetail.vue";
import Auth from "../views/Auth.vue";
import Documentation from "../views/Documentation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
  {
    path: "/projets",
    name: "Projets",
    component: Projets
  },
  {
    path: "/projets/:id",
    name: "Projet detail",
    component: ProjetDetail
  },
  {
    path: "/docs",
    name: "Documentation",
    component: Documentation
  },
  {
    path: "/about",
    name: "A propos",
    component: About
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
