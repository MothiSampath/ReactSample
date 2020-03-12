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

function App() {
  return (
    <div className="App">
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
