import React from 'react'

export default class AppState extends React.Component {

    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }

    setStateFunc() {

        // 会和之前的对象一起生成一个新的对象，不会覆盖掉之前的字段
        // Object.assign({}, this.state, {count: 1})

        this.setState({}, () => {
            console.log("callback for setstate")
        })

        // setState合并时进行累加
        this.setState((prestate, props) => {
            return {
                count: prestate.count + 1
            }
        })
    }
}