import React from 'react';
import ReactDOM from 'react-dom';
import App from './react_redux2/pages/home';
import {Provider} from 'react-redux'
import store from './react_redux2/store/index'
/*import 'antd/dist/antd.css'
import './demo/style.css'*/

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);