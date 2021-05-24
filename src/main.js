import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$http = axios
Vue.use(router)
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  vuetify,router,
  render: h => h(App)
}).$mount('#app')
