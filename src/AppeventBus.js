import React from 'react'
import {EventEmitter} from 'events'

const event = new EventEmitter()

class One extends React.PureComponent {

    render() {
        return (
            <div>

            </div>
        );
    }

    componentDidMount() {
        event.addListener("D", this.dClickListener)
    }

    componentWillUnmount() {
        event.removeListener("D", this.dClickListener)
    }

    dClickListener(data1) {
        console.log(data1)
    }
}

class Two extends React.PureComponent {
    render() {
        return (
            <div>
                <button onClick={() => this.btnClick()}></button>
            </div>
        );
    }

    btnClick() {
        event.emit("D", "123")
    }
}

export default class AppeventBus extends React.PureComponent {
    render() {
        return (
            <div>
                <One/>
                <Two/>
            </div>
        );
    }
}

