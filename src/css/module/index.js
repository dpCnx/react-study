import React from 'react'
import appStyle from './style.module.css'

export default class App extends React.PureComponent {

    render() {
        return (
            <div>
                <h2 className={appStyle.title}>Hello React</h2>
            </div>
        );
    }
}