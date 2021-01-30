import React from 'react'

class App extends React.PureComponent {
    render() {
        return (
            <div>
                App{this.props.name}
            </div>
        );
    }
}

function enhanceComponent(WrappedComponent) {
    class NewComponent extends React.PureComponent {
        render() {
            return (
                <div>
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }

    return NewComponent
}

const EnhanceComponent = enhanceComponent(App)

export default EnhanceComponent