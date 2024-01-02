// Define our routing rules

import AboutViewVue from "@/views/AboutView.vue";
import CarViewVue from "@/views/CarView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import ContactViewVue from "@/views/ContactView.vue";
import NotFoundViewVue from "@/views/NotFoundView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // the default of BASE_URL is '/'
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViewVue
    }, {
      path: "/home",
      redirect: "/"
    },
    {
      path: "/about",
      name: "about",
      component: AboutViewVue
    }, {
      path: "/cars/:id",
      name: "car",
      component: CarViewVue,
      children: [
        {
          path: "contact",
          component: ContactViewVue
        }
      ]

    },
    {
      path: "/:catchall(.*)*",
      name: "not found",
      component: NotFoundViewVue
    }
  ]

})

export default router;