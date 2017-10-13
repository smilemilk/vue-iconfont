/**
 * Created by gexuhui on 17/9/21.
 */
import Router from 'vue-router'
import pageRoutes from '../pages'
import _ from 'lodash'

export default {
  loadRouters (rous, paths, children) {
    if (_.has(rous, 'path')) {
      let ps = _.flattenDeep(paths).filter(p => p)
      if (_.last(ps) === rous.name) {
        ps = _.dropRight(ps)
      }
      if (!children) {
        if (rous.path) {
          rous.path = '/' + _.join(ps, '/') + (rous.path[0] === '/' ? '' : '/') + rous.path
        } else {
          rous.path = _.join(ps, '/') + '.html'
        }
      }
      rous.name = _.join(_.concat(ps, [rous.name]), '.')

      if (rous.children) {
        _.each(rous.children, child => this.loadRouters(child, [paths, child.name], true))
        return [rous]
      }
      return [rous]
    }
    if (rous.length) {
      return _.map(rous, r => {
        return this.loadRouters(r, [paths])
      })
    } else {
      return _.map(rous, (rou, k) => {
        return this.loadRouters(rou, [paths, k])
      })
    }
  },
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  install (Vue) {
    const routes = _.flattenDeep(this.loadRouters(pageRoutes))

    let homePage = _.find(routes, router => router.name === 'home.overview')

    homePage && (homePage.path = '/')

    Vue.$router = new Router({
      routes: routes,
      mode: 'history',
      linkActiveClass: 'link-active',
      scrollBehavior: this.scrollBehavior
    })
  }
}
