import React , {Component} from 'react'

class MessageState extends Component{

    constructor(){
        super()
        this.state = {
            message:'welcome visitor '
        }
    }

changeMessage(){
    this.setState({
        message : 'Thanks'
    })
}

    render(){
return(
    <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
    </div>
)
    }
}

export default MessageState