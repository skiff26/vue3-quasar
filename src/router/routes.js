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
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
