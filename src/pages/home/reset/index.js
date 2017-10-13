/**
 * Created by gexuhui on 17/10/13.
 */
export default {
  path: '/reset.html',
  name: 'reset',
  component: () => import(/* webpackChunkName: "home.reset" */'./reset')
}
