import Vue from 'vue'
import VueRouter from 'vue-router'
import film from './modules/film'
import cinema from './modules/cinema'
import info from './modules/info'
import ucenter from './modules/ucenter'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/film',
    },
    ...film,
    ...cinema,
    ...info,
    ...ucenter,
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router