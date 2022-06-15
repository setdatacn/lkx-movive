import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

axios.interceptors.request.use((cfg) => {
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
    });
    return cfg
})
axios.interceptors.response.use((res) => {
    Toast.clear()
    return res.data
})

export default axios