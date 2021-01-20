import React from 'react'

class App5 extends React.Component {

    render() {
        return (
            <div>
                <App5Child increment={e => this.increment()}/>
            </div>
        );
    }

    increment() {
        console.log("come")
    }
}

export default App5

class App5Child extends React.Component {

    render() {

        const {increment} = this.props

        return (
            <button onClick={increment}>+1</button>
        );
    }

}