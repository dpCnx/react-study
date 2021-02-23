import React, {PureComponent} from 'react';
import store from "../store";
import {addAction, subAction} from "../store/actions";

class Home extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        this.sub = store.subscribe(() => {
                this.setState({
                    counter: store.getState().counter
                })
            }
        )
    }

    componentWillUnmount() {
        this.sub()
    }

    render() {
        return (
            <div>
                Home:{this.state.counter}
                <button onClick={() => this.Add()}>+1</button>
                <button onClick={() => this.Sub()}>-1</button>
            </div>
        );
    }

    Add() {
        store.dispatch(addAction(1))
    }

    Sub() {
        store.dispatch(subAction(1))
    }
}

export default Home;
