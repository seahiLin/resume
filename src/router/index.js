import Vue from 'vue';
import Router from 'vue-router';
import technologyStack from '@/components/technologyStack';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: technologyStack
    },
    {
      path: '/resume',
      component: technologyStack
    },
    {
      path: '/resume/technologyStack',
      component: technologyStack
    }
  ]
});

export default router;