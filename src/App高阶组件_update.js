import React, {createContext} from 'react'

const UserContext = createContext()

function WithUser(WComponent) {
    return props => {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <WComponent {...props}{...user}/>
                    }
                }
            </UserContext.Consumer>
        )
    }
}

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <h2>{`name:${this.props.name} age:${this.props.age}`}</h2>
            </div>
        );
    }
}

const WHome = WithUser(Home)

export default class App extends React.PureComponent {
    render() {
        return (
            <div>
                <UserContext.Provider value={{name: "dp", age: 18}}>
                    <WHome/>
                </UserContext.Provider>
            </div>
        );
    }
}