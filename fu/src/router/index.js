import Vue from 'vue';
import Router from 'vue-router';
import Teacher from './teacher'
import New from './new'
import Game from './game'

Vue.use(Router);

const routes = [
  ...New,
  ...Game,
  {
    name: '404',
    path: '/404',
    component: () => import('../view/404'),
    meta: {
      title: '404'
    }
  },
  {
    path: '*',
    redirect: '/blessing'
  }
];

// add route path
// routes.forEach(route => {
//   route.path = route.path || '/' + (route.name || '');
// });

const router = new Router({ routes });

// router.beforeEach((to, from, next) => {
//   const title = to.meta && to.meta.title;
//   if (title) {
//     document.title = title;
//   }
//   next();
// });

export {
  router
};
