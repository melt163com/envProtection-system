import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
// // import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/Login/login.vue"),
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/Home/index.vue"),
    children: [
      {
        // 这里不设置值，是把main作为默认页面
        path: "",
        redirect: "/entIndex",
      },
      {
        // 企业管理-列表页
        path: "/entIndex",
        name: "entIndex",
        component: () => import("../views/Acc/Enterprise/index.vue"),
      },
      {
        // 企业管理-新增企业信息
        path: "/entAdd",
        name: "entAdd",
        component: () => import("../views/Acc/Enterprise/add.vue"),
      },
      {
        // 企业管理-账号管理
        path: "/accIndex",
        name: "accIndex",
        component: () => import("../views/Acc/Account/index.vue"),
      },
      {
        // 企业管理-账号管理新增
        path: "/accAdd",
        name: "accAdd",
        component: () => import("../views/Acc/Account/add.vue"),
      },
      {
        // 环保局管理-省环保局-列表
        path: "/proProIndex",
        name: "proProIndex",
        component: () => import("../views/Province/ProProtection/index.vue"),
      },
      {
        // 环保局管理-省环保局-新增
        path: "/proProAdd",
        name: "proProAdd",
        component: () => import("../views/Province/ProProtection/add.vue"),
      },
      {
        // 环保局管理-市环保局-列表
        path: "/cityIndex",
        name: "cityIndex",
        component: () => import("../views/Province/CityProtecyion/index.vue"),
      },
      {
        // 环保局管理-市环保局-新增
        path: "/cityAdd",
        name: "cityAdd",
        component: () => import("../views/Province/CityProtecyion/add.vue"),
      },
      {
        // 环保局管理-区环保局-列表
        path: "/areaIndex",
        name: "areaIndex",
        component: () => import("../views/Province/AreaProtecyion/index.vue"),
      },
      {
        // 环保局管理-区环保局-新增
        path: "/areaAdd",
        name: "areaAdd",
        component: () => import("../views/Province/AreaProtecyion/add.vue"),
  },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
