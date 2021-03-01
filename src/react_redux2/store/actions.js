import {ADD_BANNER, ADD_NUMBER, SUB_NUMBER} from './constants'
import axios from "axios";

export const addAction = (num) => ({
    type: ADD_NUMBER,
    num
})

export const subAction = (num) => ({
    type: SUB_NUMBER,
    num
})

export const AddBanner = (banners) => ({
    type: ADD_BANNER,
    banners
})

export const getBanners = (dispatch, getState) => {

    axios({
        url: "http://123.207.32.32:8000/home/multidata",
    }).then(res => {
        const data = res.data.data;
        console.log(data.banner.list)
        dispatch(AddBanner(data.banner.list));
    })

}
