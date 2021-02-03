import React from 'react'
import {Button, Input} from 'antd';
import moment from 'moment';

export default class CommentInput extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            content: ""
        }
    }

    render() {
        return (
            <div style={{width: "500px", padding: "20px", margin: "20px"}}>
                <Input.TextArea value={this.state.content} onChange={e => this.handleChange(e)}/>
                <Button type="primary" onClick={() => this.addMessage()}>ADD</Button>
            </div>
        );
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    addMessage() {

        const message = {
            id: moment().valueOf(),
            avatar: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E7%81%AB%E5%BD%B1%E5%BF%8D%E8%80%85%E5%A4%B4%E5%83%8F&step_word=&hs=2&pn=4&spn=0&di=96470&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2884046738%2C4135885105&os=2640157918%2C63895190&simid=0%2C0&adpicid=0&lpn=0&ln=853&fr=&fmq=1612360408134_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Ftupian.qqw21.com%2Farticle%2FUploadPic%2F2020-4%2F202043021572142541.jpg%26refer%3Dhttp%3A%2F%2Ftupian.qqw21.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1614952402%26t%3Df26abc91e4bc6dad989a92fbc70f0cc7&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bqqod8_z%26e3Bv54AzdH3F15g24wgp57xtwg2AzdH3Fbcbn0_z%26e3Bip4s&gsm=5&rpstart=0&rpnum=0&islist=&querylist=&force=undefined",
            nickName: "d",
            dataTime: moment(),
            content: this.state.content,
        }

        this.props.getCommentValue(message)

        this.setState({
            content: ""
        })
    }
}