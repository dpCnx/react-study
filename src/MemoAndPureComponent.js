import React from 'react'

const MemoApp = React.memo(function Header() {
    return (
        <div>

        </div>
    )
})


export default class PureConp extends React.PureComponent {

    render() {
        return (
            <div>
                <MemoApp/>
            </div>
        );
    }
}
