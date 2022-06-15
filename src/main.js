import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http/req'
import moment from 'moment'
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.filter('parseActors', (arr) => {
    if (arr) {
        let tmp = ''
        arr.forEach((item) => {
            tmp += item.name + ' '
        })
        return tmp
    } else {
        return '暂无'
    }
})
Vue.filter('parseTime', (time) => {
    moment.locale('zh-cn')
    return moment(parseInt(time * 1000)).format('ddd M月D日')
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')