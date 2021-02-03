import React from 'react'
import {Avatar, Comment, Tooltip} from 'antd';
import {DeleteOutlined} from "@ant-design/icons";

export default class CommentItem extends React.PureComponent {

    render() {

        const {nickName, avatar, dataTime, content} = this.props.info;

        return (
            <Comment
                author={<a href={"/#"}>{nickName}</a>}
                avatar={
                    <Avatar
                        src={avatar}
                        alt={nickName}
                    />
                }
                content={<p>{content}</p>}
                datetime={<Tooltip title={dataTime.format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{dataTime.fromNow()}</span></Tooltip>
                }
                actions={[
                    <span onClick={e => {
                        this.deleteMessage()
                    }}><DeleteOutlined/>delete</span>
                ]}
            />
        );
    }

    deleteMessage() {
        this.props.removeItem()
    }
}