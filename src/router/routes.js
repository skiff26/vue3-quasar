const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/you",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/YouPage.vue") }],
  },
  {
    path: "/about",
    component: () => import("layouts/MediumLayout.vue"),
    children: [{ path: "", component: () => import("pages/AboutPage.vue") }],
  },
  {
    path: "/expert",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ExpertPage.vue") }],
  },
  {
    path: "/info",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/InfoPage.vue") }],
  },
  {
    path: "/order",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/OrderPage.vue") }],
  },
];

export default routes;
