import React, { Component } from "react";
import { Button} from "react-bootstrap";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import "./Login.css";
const axios=require('axios');

class signUp extends Component {
 constructor() {
   super();
   this.state = {
     username: '',
     password: '',
     repassword: '',
     error: '',
   };
   this.handlePassChange = this.handlePassChange.bind(this);
   this.handlerePassChange = this.handlerePassChange.bind(this);
   this.handleUserChange = this.handleUserChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.dismissError = this.dismissError.bind(this);
 }
 addCredentials(){
     if(this.state.password===this.state.repassword)
     {
    axios.post("http://localhost:4048/signUp",{"userName":this.state.username,"userPassword":this.state.password})
    .then((res)=>{
           console.log(res);
         
    })
   }
   else{
       alert('Password doesn\'t match');
   } 
}
 dismissError() {
   this.setState({ error: '' });
 }
 handleSubmit(evt) {
   evt.preventDefault();
   if (!this.state.username) {
     return this.setState({ error: 'Username is required' });
   }
   if (!this.state.password) {
     return this.setState({ error: 'Password is required' });
   }
   return this.setState({ error: '' });
 }
 handleUserChange(evt) {
   this.setState({
     username: evt.target.value,
   });
 };
 handlePassChange(evt) {
   this.setState({
     password: evt.target.value,
   });
 }
 handlerePassChange(evt) {
    this.setState({
      repassword: evt.target.value,
    });
  }
 render() {
   return (
     <div className="Log">
     {/* <div id="bg">
      <img src="images/bg.jpg" alt="">
         */}
         <div className="Login">
           <h2> Sign up a new Account</h2>
       <form onSubmit={this.handleSubmit}>
         {
           this.state.error &&
           <h3 data-test="error" onClick={this.dismissError}>
             <button onClick={this.dismissError}>:heavy_multiplication_x:</button>
             {this.state.error}
           </h3>
         }
         <label>User Name  </label>
         <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
         <br/>
         <br/>
         <label>Password  </label>
         <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
        <br/><p>       </p>
        <label>Re-type Password </label>
         <input type="password" data-test="password" value={this.state.repassword} onChange={this.handlerePassChange} />
        <br/><p>       </p>
         <Button onClick={()=>this.addCredentials()}> Sign Up</Button><p> </p>
         
       </form>
     </div>
     </div>
     // </div>
   );
 }
}
export default signUp;