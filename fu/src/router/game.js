export default [
  {
    name: 'blessing',
    path: '/blessing',
    component: () => import('../view/game/home.vue'),
    meta: {
      title: '"符"合你意'
    }
  },
  {
  	name: 'makeFu',
    path: '/makeFu',
    component: () => import('../view/game/makeFu.vue'),
    meta: {
      title: '"符"合你意'
    }
  }
]