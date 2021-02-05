import React from 'react'
import instance from './request'

export default class App extends React.PureComponent {


    componentDidMount() {
        instance({
            url: "get"
            // method: "GET"
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                App
            </div>
        );
    }
}