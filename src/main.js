import Vue from 'vue'
import App from './App.vue'
import Button from './index.js'
import './css/button.css'
Vue.config.productionTip = false
Vue.use(Button);

new Vue({
    render: h => h(App)
}).$mount('#app')