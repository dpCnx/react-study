import React from 'react'

export default class App extends React.PureComponent {

    constructor() {
        super();

        this.state = {
            username: ""
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.myOnSubmit(e)}>
                    <label htmlFor="username">
                        <input type="text" id="username" value={this.state.username} onChange={event => {
                            this.changeText(event)
                        }}/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }

    myOnSubmit(e) {
        e.preventDefault()
        console.log(this.state.username)
    }

    changeText(event) {
        this.setState({
            username: event.target.value
        })
    }

}