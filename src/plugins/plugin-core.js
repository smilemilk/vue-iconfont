/**
 * Created by gexuhui on 17/9/26.
 */
/**
 * 插件
 */
import Router from 'vue-router'
import Promise from 'promise-polyfill'
import iView from 'iview'
import '../assets/iconfont/iconfont.css'

export default {
  defineVueProp (Vue) {
    Vue.prop = (key, value) => {
      Vue[`$${key}`] = Vue.prototype[`$${key}`] = value
    }
    Vue.beforeRenderHooks = []
    Vue.beforeRender = (fn) => {
      Vue.beforeRenderHooks.push(fn)
    }
    Vue.render = opts => {
      return new Promise(resolve => {
        if (Vue.beforeRenderHooks.length) {
          let step = index => {
            if (index >= Vue.beforeRenderHooks.length) {
              resolve()
            } else {
              Vue.beforeRenderHooks[index](() => {
                step(index + 1)
              })
              resolve()
            }
          }
        } else {
          resolve()
        }
      }).then(() => {
        return new Vue(Object.assign(opts, {
          router: Vue.$router
        }))
      })
    }
  },
  install (Vue) {
    // 定义Vue全局属性
    this.defineVueProp(Vue)

    // 加载核心插件
    Vue.use(iView)
    Vue.use(Router)
  }
}
