import {ADD_BANNER, ADD_NUMBER, SUB_NUMBER} from "./constants";

const initState = {
    counter: 0,
    banners: [],
}

function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return {...state, counter: state.counter + action.num}
        case SUB_NUMBER:
            return {...state, counter: state.counter - action.num}
        case ADD_BANNER:
            return {...state, banners: state.banners}
        default:
            return state
    }
}

export default reducer