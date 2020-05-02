import Vue from 'vue'
import App from './App.vue'
import Button from './index.js'
import './iconfont/iconfont.css'
import './css/button.css'
Vue.config.productionTip = false
Vue.use(Button);
window.Vue = Vue;

new Vue({
    render: h => h(App)
}).$mount('#app')