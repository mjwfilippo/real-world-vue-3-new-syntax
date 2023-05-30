import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/EventList.vue";
import EventLayout from "@/views/event/LayoutView.vue";
import EventDetails from "@/views/event/DetailsView.vue";
import EventRegister from "@/views/event/RegisterView.vue";
import EventEdit from "@/views/event/EditView.vue";
import AboutView from "@/views/AboutView.vue";
import NotFound from "@/views/NotFound.vue";
import NetworkError from "@/views/NetworkError.vue";
import NProgress from "nprogress"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList,
      props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: "/events/:id",
      name: "event-layout",
      props: true,
      component: EventLayout,
      children: [
        {
          path: "",
          name: "event-details",
          component: EventDetails
        },
        {
          path: "register",
          name: "event-register",
          component: EventRegister
        },
        {
          path: "edit",
          name: "event-edit",
          component: EventEdit
        }
      ]
    },
    {
      path: "/event/:afterEvent(.*)",
      redirect: to => {
        return { path: "/events/" + to.params.afterEvent };
      }
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound
    },
    {
      path: "/404/:resource",
      name: "404-resource",
      component: NotFound,
      props: true
    },
    {
      path: "/network-error",
      name: "network-error",
      component: NetworkError
    }
  ]
});

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
