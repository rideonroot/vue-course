import { createRouter, createWebHashHistory } from "vue-router";
import * as routes from "./routeNames";

const MAIN_TITLE = "ТЕХНОЗАВРРР";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: routes.ROUTE_MAIN,
      component: () => import("@/pages/MainPage.vue"),
      meta: {
        title: MAIN_TITLE,
      },
    },
    {
      path: "/products/:id",
      name: routes.ROUTE_PRODUCT,
      component: () => import("@/pages/ProductPage.vue"),
      meta: {
        title: MAIN_TITLE,
      },
    },
    {
      path: "/cart",
      name: routes.ROUTE_CART,
      component: () => import("@/pages/CartPage.vue"),
      meta: {
        title: `Корзина - ${MAIN_TITLE}`,
      },
    },
    {
      path: "/order",
      name: routes.ROUTE_ORDER,
      component: () => import("@/pages/OrderPage.vue"),
      meta: {
        title: `Оформление заказа - ${MAIN_TITLE}`,
      },
    },
    {
      path: "/order/:id",
      name: routes.ROUTE_ORDER_INFO,
      component: () => import("@/pages/OrderInfoPage.vue"),
      meta: {
        title: (route) => `Заказ оформлен №${route.params.id} - ${MAIN_TITLE}`,
      },
    },
    {
      path: "/:pathMatch(.*)",
      name: routes.ROUTE_NOT_FOUND,
      component: () => import("@/pages/NotFoundPage.vue"),
      meta: {
        title: `Страница не найдена - ${MAIN_TITLE}`,
      },
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  let pageTitle = MAIN_TITLE;
  const { title } = to.meta;

  if (title) {
    pageTitle = typeof title === "function" ? title(to) : title;
  }

  document.title = pageTitle;
  next();
});

export default router;
