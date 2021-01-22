import axios from 'axios';
import router from '../router';


// 设置 axios 请求时的基本配置
let config = {
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 500
}

// 设置 requests 为请求的入口, 在后续的 methods 中可以直接 this.requests.(get, post, patch, delete)
const requests = axios.create(config)

// 添加请求拦截器
requests.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.Authorization = localStorage.getItem('token')
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
requests.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.statusCode === 401) {
        localStorage.removeItem('token');
        router.replace('/login');
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

// 导出增添的实例
export default requests
