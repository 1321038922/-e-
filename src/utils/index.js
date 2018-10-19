import axios from 'axios'
import store from '../store'

const env = process.env.NODE_ENV
//在生产环境下将会被设置为production

let baseURL = env == 'development' ? '/api' : '/'

const instance = axios.create ( {
    baseURL,
    timeout:10000,
    // beforeSend: function(request) {
    //     request.setRequestHeader("Authorization", token);
    // },
    // headers:{'Authorization': 'this.$store.state.token'}
})

const qs = require('querystring')
instance.interceptors.request.use((config) => {
    if(config.method == 'post') {
        config.data = qs.stringify(config.data)
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
}, function(error) {
    return Promise.reject(error)
})

const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            const token = store.state.token
            let computedConfig = {
                ...config
            }
            if(token){
                computedConfig = {
                    headers: {
                        'token': token
                    }
                }
            }
            console.log(computedConfig)
            instance.get(url,{params:data,...computedConfig}).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods) {
        return new Promise((resolve,reject) => {
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
