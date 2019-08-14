import Vue from 'vue';
import Router from 'vue-router';
import selfEvaluation from '@/components/selfEvaluation';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: selfEvaluation
    },
    {
      path: '/resume',
      component: selfEvaluation
    },
    {
      path: '/resume/selfEvaluation',
      component: selfEvaluation
    }
  ]
});

export default router;