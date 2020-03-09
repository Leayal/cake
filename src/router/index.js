import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Kicker from "../components/Kicker.vue";
import Disc from "../components/Disc.vue";
import axios_test from "../tempt/axios_test.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/kicker",
    name: "Kicker",
    component: Kicker
  },
  {
    path: "/disc",
    name: "Disc",
    component: Disc
  },
  {
    path:"/axios_test",
    name:"axios_test",
    component: axios_test
  }
];

const router = new VueRouter({
  routes
});

export default router;