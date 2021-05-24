import Vue from 'vue'
import VueRouter from 'vue-router'
// login page

import Login_pro from '../components/login/login_pro.vue'
import Login from '../components/login/login.vue'
import Main from '../components/main/mainPage.vue'
import Attestation from '../components/attestation/attestationPage.vue'
import Dashboard from '../components/dashboard/dashboard.vue'
import Billing from '../components/billing/billing.vue'
import ServiceProvidesr from '../components/service_provider/serviceProvider.vue'
import SdkLog from '../components/sdk_log/sdkLog.vue'
import SdkVersion from '../components/sdk_version/sdkVersion.vue'
import License from '../components/license/license.vue'
import CommunicationKey from '../components/communication_key/communicationKey.vue'
// import BillingDetail from '../components/billing/billingDetail.vue'

// import Login from '../components/login/login.vue'
//1.安装插件
Vue.use(VueRouter);

//2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/',
    // redirect: '/login',
    // name:'login',
    component: Login,
    children: [
      { path: 'login', name: 'login', component: Login },
    ]
  },
  {
    path: '/login_pro',
    name: 'login_pro', 
    component: Login_pro,
  },
  {
    path: '/main',
    name: 'main', 
    component: Main,
    children: [
      { path: '/main/dashboard', name: 'dashboard', component: Dashboard },
      { path: '/main/serviceProvidesr', name: 'serviceProvidesr', component: ServiceProvidesr },
      { path: '/main/billing', name: 'billing', component: Billing,children:[
        // { path: '/main/billing/detail', name: '/billingDetail', component: BillingDetail}
      ] },
      { path: '/main/sdkLog', name: 'sdkLog', component: SdkLog },
      { path: '/main/attestation', name: 'attestation', component: Attestation },
      { path: '/main/sdkVersion', name: 'sdkVersion', component: SdkVersion },
      { path: '/main/license', name: 'license', component: License },
      { path: '/main/communicationKey', name: 'communicationKey', component: CommunicationKey },
    ]
  },
  {
    path: '/attestation',
    name: 'attestation', 
    component: Attestation,
  }
  
]
const router = new VueRouter({
  routes,
  mode: "history"
})

//3.导出router
export default router
