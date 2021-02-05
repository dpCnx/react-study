import axios from 'axios'
import {BASE_URL, TIME_OUT} from './config'


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
});

instance.interceptors.request.use(config => {

    console.log("loading")

    return config
}, error => {

    console.log("request err:", error)

});

instance.interceptors.response.use(res => {

    console.log("res===>", res)

    return res.data

}, error => {

    console.log("response err:", error)

});

export default instance