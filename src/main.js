import Vue from 'vue'
import App from './App.vue'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

Vue.component('InputText', InputText);
Vue.component('Button', Button);

import 'primeflex/primeflex.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
