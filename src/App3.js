import React from 'react'
import PropTypes from 'prop-types'

class App4 extends React.Component {

    render() {
        return (
            <div>
                <App4Child name="d" age={18}/>
                <hr/>
                <App4Child/>
            </div>
        );
    }
}

export default App4

class App4Child extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
    }

    static defaultProps = {
        name: "p",
        age: 18
    }


    componentDidMount() {

        console.log(this.props)
    }

    render() {

        const {name, age} = this.props

        return (
            <div>
                <h2>name = {name},age = {age}</h2>
            </div>
        );
    }

}