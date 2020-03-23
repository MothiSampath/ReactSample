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
import PopupClose from "./components/PopupClose"
import CreateUser from './components/CreateUser/CreateUser'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{



constructor(props) {
  super(props);

  this.state = { isOpen: true };
}

openPopup = () => {
  this.setState({
    isOpen: true
  });
}

closePopup = () => {
  this.setState({
    isOpen: false
  });
}

render() {
  return (
    <div className="App">


        {/* <button onClick={this.openPopup}>
          Create User
        </button>

        <Popup show={this.state.isOpen}
          onClose={this.closePopup}>
          <CreateUser/>
        </Popup> */}

    <Router>
      <div>
            <Switch>
                {/* <Popup trigger={<button> Create User</button>} position="bottom center"> */}
                  {/* <PopupClose show={this.state.isOpen}
                    onClose={this.closePopup}>
                      <CreateUser/>
                  </PopupClose>  */}
                  <CreateUser/>
                {/* </Popup> */}
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
}

export default App;
