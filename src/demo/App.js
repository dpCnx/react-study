import React from 'react'
import Tablayout from "./Tablayout";

export default class App extends React.Component {

    constructor() {
        super();

        this.titles = ["A", "B", "C"]

        this.state = {
            currentTitle: "A",
        }
    }

    render() {

        const {currentTitle} = this.state

        return (
            <div>
                <Tablayout titles={this.titles} click={(index) => this.clickForTitle(index)}/>
                <h2>{currentTitle}</h2>
            </div>
        );
    }

    clickForTitle(i) {
        this.setState({
            currentTitle: this.titles[i]
        })
    }
}