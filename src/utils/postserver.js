import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 5000
})

// 请求拦截
api.interceptors.request.use(
    function(config) {
        // console.group('全局请求拦截')
        // console.log(config)
        // console.groupEnd()
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);  

//响应拦截
api.interceptors.response.use(
    function(response){
        // console.group('全局响应拦截')
        // console.log(response)
        // console.groupEnd()
        return response;
    },
    function(err) {
        return Promise.reject(err);
    }
);

export function get(url, params){
   return api.get(url, {
     params
   });
}

export function post(url, data){
    return api.post(url, data);
}

export function del(url, params){
    return api.delete(url)
}

