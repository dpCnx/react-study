import React, {createRef, forwardRef} from 'react'

export default class App extends React.PureComponent {
    constructor() {
        super();

        this.titleRes = createRef()
        this.homeRes = createRef()
        this.bannerRes = createRef()

    }

    render() {
        return (
            <div>
                <h2 ref={this.titleRes}/>
                <Home ref={this.homeRes}/>
                <Banner ref={this.bannerRes}/>
                <button onClick={e => this.increment()}/>
            </div>
        );
    }

    increment() {

        console.log(this.titleRes)
        console.log(this.homeRes)
        console.log(this.bannerRes)

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

const Banner = forwardRef(function (props, refs) {
    return (
        <div ref={refs}>
            Banner
        </div>
    )
})




