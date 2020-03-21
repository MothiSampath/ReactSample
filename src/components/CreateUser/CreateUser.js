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
            password: '',
            file: null
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
        console.log("To show State")
        console.log(this.state)

        let formdata = new FormData()
        formdata.append('userName', this.state.username)
        formdata.append('password', this.state.password)
        formdata.append('email', this.state.email)
        formdata.append('fileToUpload', this.state.file)

        axios.post('http://localhost:8080/users/saveUser', formdata
           
        )
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

    myFileHandler = (event) =>{
        let file = event.target.files[0]

        this.setState({file: file})
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
                <p>Upload a file</p>
                <input
                    type='file'
                    name='file'
                    onChange={this.myFileHandler}
                />
                <br/>
                <input type='submit'/>
            </form>
        );
    }
}

ReactDOM.render(<CreateUser/>, document.getElementById('root'))

