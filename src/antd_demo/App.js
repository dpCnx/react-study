import React from 'react'
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

export default class App extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            commonList: []
        }
    }

    render() {
        return (
            <div>

                {
                    this.state.commonList.map((value, index) => {
                        return <CommentItem info={value} key={value.id} removeItem={e => this.removeComment(index)}/>
                    })
                }

                <CommentInput getCommentValue={info => this.addCommentValue(info)}/>
            </div>
        );
    }

    addCommentValue(info) {

        const newCommon = [...this.state.commonList]
        newCommon.push(info)
        this.setState({
            commonList: newCommon
        })
    }

    removeComment(index) {

        const newCommon = [...this.state.commonList]
        newCommon.splice(index,1)
        this.setState({
            commonList: newCommon
        })

    }
}