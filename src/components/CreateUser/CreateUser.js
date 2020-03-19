import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from '../../App';


export default class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: null
        };
    }

    closePopusOnClick() {
        this.popup.current.leafletElement.options.leaflet.map.closePopup();
    }

    mySubmitHandler = (event) => {
        const self = this;
        event.preventDefault();
        let username = this.state.username;
        if (Number(username)) {
            alert("user name should not be numbers");
        }
        axios.post('http://localhost:8080/users/saveUser', {
            userName: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
            .then(function (response) {
                console.log(response);
                alert('Success')
                self.close();

            })
            .catch(function (error) {
                console.log(error);

            });
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Save User</h1>
                <p>UserName:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Email:</p>
                <input
                    type='text'
                    name='email'
                    onChange={this.myChangeHandler}
                />
                <p>Password:</p>
                <input
                    type='text'
                    name='password'
                    onChange={this.myChangeHandler}
                />
                <br/>
                <br/>
                <input type='submit'/>
            </form>


        );
    }
}

ReactDOM.render(<CreateUser/>, document.getElementById('root'))

