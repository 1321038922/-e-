import axios from 'axios'

const env = process.env.NODE_ENV
//在生产环境下将会被设置为production

let baseURL = 'http://211.67.177.56:8080/hhdj'

const instance = axios.create ( {
    baseURL,
    timeout:10000
})

const xhr = {
    get(url, data, config) {
        return new Promise((resolve,reject) => {
            instance.get(url, {params:data}, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods) {
        return new Premise((resolve,reject) => {
            instance[methods](url, data, config).then(res => {
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        })
    },
    post(url, data, config) {
        return this.fetch(url, data, config, 'post')
    }
}
 export default xhr
