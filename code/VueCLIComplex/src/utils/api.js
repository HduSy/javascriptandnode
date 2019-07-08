import axios from 'axios'
// let baseUrl = ''
/**
 * 封装axios get请求
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export const getRequest = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
/**
 * 封装axios post 请求
 * @param url
 * @param params
 * @returns {*}
 */
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: url,
        data: params,
        headers: {
            'Content-type': 'application/json'
        }
    })
}
/**
 * 封装axios delete请求
 * @param url
 * @param params
 * @returns {*}
 */
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: url,
        data: params,
        headers: {
            'Content-type': 'application/json'
        }
    })
}
/**
 * 封装axios put请求
 * @param url
 * @param params
 * @returns {*}
 */
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: url,
        data: params,
        headers: {
            'Content-type': 'application/json'
        }
    })
}
