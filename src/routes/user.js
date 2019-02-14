const routes = [{
  path: 'users',
  component: () => import('./../components/user/app'),
  children: [
    {
      path: '',
      name: 'users.index',
      component: () => import('./../components/user/Page/index')
    },
    {
      path: ':id',
      name: 'users.show',
      component: () => import('./../components/user/Page/show')
    }
  ]
}]
module.exports = routes;