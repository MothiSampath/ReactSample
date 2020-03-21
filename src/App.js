import React from 'react';
import logo from './logo.svg';
import './App.css';
import Call from './components/Call'
import Welcome from './components/Welcome'
import HelloJSX from './components/HelloJSX'
import HelloWithoutJSX from './components/HelloWithoutJSX'
import MessageState from './components/MessageState'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent'
import GetCallService from './components/GetCallService'
import SampleTable from './components/SampleTable'
import Popup from "reactjs-popup"
import CreateUser from './components/CreateUser/CreateUser'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

    <Router>
      <div>
            <Switch>
                <Popup trigger={<button> Create User</button>} position="bottom center">
                    <CreateUser/>
                </Popup>
            </Switch>
      </div>
    </Router>

    <GetCallService/>
      {/* <ParentComponent/> */}
   {/* <Counter/> */}
    {/* <MessageState/> */}

     {/* <Call/> 
      <Welcome name='react'/>
      <HelloJSX name = 'mothi'>
        <p1>mothi's child component</p1>
      </HelloJSX> 
      <HelloJSX name = 'Gowtham'> 
        <button>OPEN</button>
      </HelloJSX>
      <HelloWithoutJSX name='mothi'/> */}
    </div>
  );
}

export default App;
