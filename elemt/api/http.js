import { apiPost } from "./api";

//获取验证码
export function getCode() {
    return post('http://49.94.00.1/index.php/index/index/getcode')
}
//post方法
function post(url, data) {
    return new Promise((resolve, reject) => {
        apiPost(url, data).then(value => {
            if (value.code == 0) {
                resolve(value)
            } else {
                reject(value)
            }
        }, reason => {
            reject(reason)
        })
    })
}
//get方法
// function get(url) {
//     return new Promise((resolve, reject) => {
//         apiGet(url).then(value => {
//             if (value.code == 0) {
//                 resolve(value)
//             } else {
//                 reject(value)
//             }
//         }, reason => {
//             reject(reason)
//         })
//     })
// }