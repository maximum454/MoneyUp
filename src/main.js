import Vue from 'vue'
import App from './App.vue'
import AppNav from './componets/nav';
import AppHeader from './componets/header';
import AppSubscript from './componets/subscribtions';
import AppBenefits from './componets/benefits';
import AppFreechat from './componets/freechat';
import AppReviews from './componets/reviews';
import AppFooter from './componets/footer';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.js'
Vue.use(BootstrapVue);

Vue.component('AppNav', AppNav);
Vue.component('AppHeader', AppHeader);
Vue.component('AppSubscript', AppSubscript);
Vue.component('AppBenefits', AppBenefits);
Vue.component('AppFreechat', AppFreechat);
Vue.component('AppReviews', AppReviews);
Vue.component('AppFooter', AppFooter);

new Vue({
  el: '#app',
  render: h => h(App),
});


