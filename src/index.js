import Vue from 'vue'
import pluginCore from '../src/plugins/plugin-core'
import pluginRouter from '../src/plugins/plugin-router'
import App from '../src/pages/app'

Vue.use(pluginCore)
Vue.use(pluginRouter)

Vue.render({
  el: '#app',
  template: '<App/>',
  components: {App}
})
