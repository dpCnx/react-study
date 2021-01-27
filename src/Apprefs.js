import React, {createRef} from 'react'

export default class Apprefs extends React.PureComponent {

    constructor() {
        super();

        this.titleRef = createRef()
        this.titleEL = null

        this.countRef = createRef()
    }

    render() {
        return (
            <div>
                <h2 ref={"titleRef"}>hello react</h2>
                <h2 ref={this.titleRef}>hello react</h2>
                <h2 ref={e => this.titleEL = e}>hello react</h2>
                <AppCount ref={this.countRef}/>
                <button onClick={e => this.changeText()}/>
            </div>
        );
    }

    changeText() {
        //1
        this.refs.titleRef.innerHTML = "hello world1"
        //2
        this.titleRef.current.innerHTML = "hello world2"
        //3
        this.titleEL.innerHTML = "hello world3"

        this.countRef.current.increment()
    }
}

class AppCount extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            count: 0,
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={e => this.increment()}/>
            </div>
        );
    }

    increment() {

        this.setState({
            count: this.state.count + 1
        })
    }
}







