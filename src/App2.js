import React from 'react'

class App3 extends React.Component {

    constructor() {
        super();

        console.log("1")

        this.state = {
            msg: "HELLO"
        }
    }

    render() {

        console.log("2")

        return (
            <div>
                <h2>{this.state.msg}</h2>
                <button onClick={() => this.btnClick()}></button>
            </div>
        );
    }

    btnClick() {
        this.setState({
            msg: "REACT"
        })
    }

    componentDidMount() {
        console.log("3")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("update");
    }

    componentWillUnmount() {
        console.log("end")
    }
}

export default App3
