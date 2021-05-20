import React from "react";
import Login from "./componnant/Login"
import "./styles.css";
import ValidatedLoginForm from './componnant/ValidatedLoginForm';

export class App extends React.Component{
  render(){
    return (
      <div className="App">
        <h1>Validated Login Form</h1>
        <ValidatedLoginForm />
        <Login/>
      </div>
    );
  }
}
