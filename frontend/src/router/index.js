import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Question from "../views/Question.vue";
import Result from "../views/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/questions/:id",
    name: "show-question",
    component: Question,
    params: true,
  },
  {
    path: "/result",
    name: "result",
    component: Result,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});
const DEFAULT_TITLE = '登山クイズ'
router.afterEach(() => {
  document.title = DEFAULT_TITLE;
})

export default router;
