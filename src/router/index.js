import { createRouter, createWebHistory } from 'vue-router'
import ImgTest from '../views/ImgTest.vue'
import Homeview from '../views/Homeview.vue'
import CookiePop from "../views/CookiePop.vue";
import FormTest from "../views/FormTest.vue";
import StoreTest from "../views/StoreTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path :"/",
      name : "home",
      component : Homeview
    },
    {
      path:"/img",
      name: "img",
      component : ImgTest
    },
    {
      path:"/cookie",
      name: "cookie",
      component : CookiePop
    },
    {
      path:"/form",
      name: "form",
      component : FormTest
    },
    {
      path : "/store",
      name: "stroe",
      component : StoreTest
    }
  ]
})

export default router
