import { createRouter, createWebHistory } from 'vue-router';

import TestPage01 from './components/TestPage01.vue';
import TestPage02 from './components/TestPage02.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/test-page01' },
    { name: 'test1', path: '/test-page01', component: TestPage01 },
    { name: 'test2', path: '/test-page02', component: TestPage02 },
  ],
  linkActiveClass: 'example-active',
  linkExactActiveClass: 'example-exact-active',
});

export default router;