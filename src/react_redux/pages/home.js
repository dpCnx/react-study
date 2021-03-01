import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {addAction, subAction} from "../store/actions";

class Home extends PureComponent {

    render() {
        return (
            <div>
                Home:{this.props.counter}
                <button onClick={() => this.props.add(2)}>+1</button>
                <button onClick={() => this.props.sub(3)}>-1</button>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    add: function (num) {
        dispatch(addAction(num))
    },
    sub: function (num) {
        dispatch(subAction(num))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);
