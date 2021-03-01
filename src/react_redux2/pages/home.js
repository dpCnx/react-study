import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {addAction, getBanners, subAction} from "../store/actions";

class Home extends PureComponent {

    componentDidMount() {
        this.props.getBanners()
    }

    render() {
        return (
            <div>
                Home:{this.props.counter}
                <button onClick={() => this.props.add(2)}>+1</button>
                <button onClick={() => this.props.sub(3)}>-1</button>

                <div>
                    {this.props.banners}
                </div>

                <ul>
                    {
                        this.props.banners.map((item, index) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    counter: state.counter,
    banners: state.banners,
})

const mapDispatchToProps = dispatch => ({
    add: function (num) {
        dispatch(addAction(num))
    },
    sub: function (num) {
        dispatch(subAction(num))
    },
    getBanners: function () {
        dispatch(getBanners)
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);
