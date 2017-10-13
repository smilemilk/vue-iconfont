/**
 * Created by gexuhui on 17/10/13.
 */
export default {
  path: '/login.html',
  name: 'login',
  component: () => import(/* webpackChunkName: "home.login" */'./login')
}
