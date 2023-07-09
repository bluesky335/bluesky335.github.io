import i18n from '@/i18n';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: 'navbar.home',
    },
  },
  {
    path: '/apps',
    component: () => import('@/views/AppsPage.vue'),
    meta: {
      title: 'navbar.apps',
    },
  },
  {
    path: '/open-source',
    component: () => import('@/views/OpenSourcePage.vue'),
    meta: {
      title: 'navbar.openSource',
    },
  },
  {
    path: '/privacy-policy/code-scanner',
    component: () => import('@/views/privacy-policy/PrivacyCodeScanner.vue'),
    meta: {
      title: 'apps.privacyPolicy',
    },
  },
];
const history = createWebHistory();

const router = createRouter({ history, routes });
router.beforeEach((route) => {
  const title = route.meta?.title as string;
  if (title) {
    document.title = i18n.global.t(title) + ' - coderx.xyz';
  }
});

export default router;
