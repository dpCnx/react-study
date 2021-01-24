import React from 'react'

export default class Tablayout extends React.Component {

    constructor() {
        super();

        this.state = {
            currentIndex: 0
        }
    }

    render() {

        const {titles, click} = this.props
        const {currentIndex} = this.state

        return (
            <div className="tab_control">
                {
                    titles.map((item, index) => {
                            return (
                                <div key={index}
                                     className={"tab_item " + (index === currentIndex ? "active" : "")}
                                     onClick={e => {
                                         this.itemClick(index)
                                     }}>
                                    <span>{item}</span>
                                </div>
                            )
                        }
                    )
                }

            </div>
        );
    }

    itemClick(i) {
        this.setState({
            currentIndex: i,
        })

        const {click} = this.props
        click(i)
    }
}