import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "@/views/HeroView";
import OurCoofeeView from "@/views/OurCoofeeView";
import GoodsPageView from "@/views/GoodsPageView";
import ContactsView from "@/views/ContactsView";
import ThanksView from "@/views/ThanksView";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HeroView,
    },
    {
      path: "/goodspage",
      component: GoodsPageView,
    },
    {
      path: "/our-coofee",
      component: OurCoofeeView,
    },
    {
      path: "/contacts",
      component: ContactsView,
    },
    {
      path: "/thanks",
      component: ThanksView,
    },
  ],
});

export default router;
