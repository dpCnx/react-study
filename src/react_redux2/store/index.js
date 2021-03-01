import reducer from "./reducer";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

const storeEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, storeEnhancer)

export default store