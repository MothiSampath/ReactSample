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
        })
        .catch(error =>{
            console.log(error)
        })
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
          <TableRow>
            <TableCell><h1>UserName</h1></TableCell>
            <TableCell align="right"><h1>email</h1></TableCell>
            <TableCell align="right"><h1>Password</h1></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(row => (
            <TableRow key={row.userName}>
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        )
    }
}

export default GetCallService





