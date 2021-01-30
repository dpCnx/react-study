import React from 'react'

function WithTime(WComponent) {
    return class TimeComponent extends React.PureComponent {

        componentWillMount() {
            this.begin = Date.now()
        }

        componentDidMount() {
            this.end = Date.now()
            let t = this.begin - this.end
            console.log(`time===>${t}`)
        }

        render() {
            return (
                <div>
                    <WComponent {...this.props}/>
                </div>
            );
        }
    }
}

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

const WHome = WithTime(Home)

export default class App extends React.PureComponent {
    render() {
        return (
            <div>
                <WHome/>
            </div>
        );
    }
}