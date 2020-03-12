import React, { Component } from 'react'
import axios from 'axios'

class GetCallService extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users : []
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/users/getAllUsers')
        .then(response => {
            this.setState({users : response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render() {
        const {users} = this.state
        return (
            <div>
                <h1>LIST OF USERS </h1>
                {
                users.length?
                users.map(user => <div key={user.id}>{user.userName}-----{user.email}-----{user.password}</div>):
                null
                }
            </div>
        )
    }
}

export default GetCallService
