import React from 'react'

const UserContext = React.createContext()

export default class AppContext extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "d",
            age: 18
        }
    }

    render() {
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <AppContextChild/>
                </UserContext.Provider>
            </div>
        );
    }
}

function AppContextChild(props) {
    return (
        <div>
            <AppContextChild2/>
            <hr/>
            <AppContextChild3/>
        </div>
    )
}

class AppContextChild2 extends React.Component {


    render() {
        return (
            <div>
                <h2>{this.context.name}</h2>
                <h2>{this.context.age}</h2>
            </div>
        );
    }
}

AppContextChild2.contextType = UserContext;

function AppContextChild3(props) {
    return (
        <UserContext.Consumer>
            {
                value => {
                    return (
                        <div>
                            <h2>{value.name}</h2>
                            <h2>{value.age}</h2>
                        </div>
                    );
                }
            }
        </UserContext.Consumer>
    )
}