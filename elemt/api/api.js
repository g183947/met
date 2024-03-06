import axios from 'axios'
axios.defaults.timeout = 30000
axios.defaults.baseURL = process.env.VUE_APP_API_URL
//获取配置项信息，可以做你的逻辑处理
if (process.env.VUE_APP_MODE === 'development') {
    //开发环境下的执行操作
    console.log('开发');
} else if (process.env.VUE_APP_MODE === 'test') {
    //测试环境下的执行操作
    console.log('测试');
} else {
    //生产环境下的执行操作
    console.log('正式');
}
axios.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
    if (response.status == 200) {
        return response
    }
}, (error) => {
    return Promise.reject(error)
})
export function apiGet(url) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url
        }).then(value => {
            resolve(value.data)
        }, reason => {
            reject(reason)
        })
    })
}
export function apiPost(url, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            data
        }).then(value => {
            resolve(value.data)
        }, reason => {
            reject(reason)
        })
    })
}