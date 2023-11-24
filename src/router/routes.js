const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'singin', component: () => import('pages/SignIn/Index.vue'), alias: '' },
      { path: 'main', component: () => import('pages/Main/Index.vue') },
      { path: 'my-area', component: () => import('pages/MyArea/Index.vue') },
      { path: 'profile', component: () => import('pages/Profile/Index.vue') },
    ],
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
