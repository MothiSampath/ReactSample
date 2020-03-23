import React, { Component } from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





class GetCallService extends Component {

    // const useStyles = makeStyles({
    //     table: {
    //       minWidth: 650,
    //     },
    //   });
    

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
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    deleteuser(id){
      console.log('ID to delete>>' +id)
      alert("User has been successfully deleted")
      axios.delete('http://localhost:8080/users/deleteUser/'+id)
        .then(response => {
          console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    // downloadAttachment(id){
     
    //   axios.get('http://localhost:8080/users/getUserAttachment/'+id)
    //     .then(response => {
    //         console.log(response)
    //         const filename =  id;
    //         let blob = new Blob(response)
    //         var url = URL.createObjectURL(blob);
    //         window.open(url);
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    // }

    downloadAttachment(id){
      fetch('http://localhost:8080/users/getUserAttachment/'+id)
        .then(response => {
          response.blob().then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = id+response.type;
            a.click();
          });
          //window.location.href = response.url;
      });
    }

    render() {
        const {users} = this.state
        // const classes = useStyles()
        return (
            // <div>
            //     <h1>LIST OF USERS </h1>
            //     {
            //     users.length?
            //     users.map(user => <div key={user.id}>{user.userName}-----{user.email}-----{user.password}</div>):
            //     null
            //     }
            // </div>

            <TableContainer component={Paper}>
      {/* <Table className={classes.table} aria-label="simple table"> */}
      <div>
          <h1>List Of Users</h1>
          <b></b>
          <b></b>
      </div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell><h1>UserName</h1></TableCell>
            <TableCell align="left"><h1>email</h1></TableCell>
            <TableCell align="left"><h1>Password</h1></TableCell>
           {/* <TableCell align="left"><h1>deleteUser</h1></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(row => (
            <TableRow key={row.userName}>
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell type="password" align="left">{row.password}</TableCell>
              {/* <TableCell align="left"><button onClick={this.deleteuser(row.id)}>delete</button></TableCell> */}
              <TableCell align="left"><button onClick={() => this.deleteuser(row.id)}>delete</button></TableCell>
              <TableCell align="left"><button onClick={() => this.downloadAttachment(row.id)}>Download Photo</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        )
    }
}

export default GetCallService





