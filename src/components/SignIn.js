import React, { Component } from "react";
import { Button} from "react-bootstrap";
import "./Login.css";
import {withRouter} from 'react-router-dom';
const axios=require('axios');

class signUp extends Component {
 constructor() {
   super();
   this.state = {
     username: '',
     password: '',
     error: '',
   };
   this.handlePassChange = this.handlePassChange.bind(this);
   this.handleUserChange = this.handleUserChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.dismissError = this.dismissError.bind(this);
 }
 componentDidMount()
 {
   const token=localStorage.getItem('myData');
  console.log("this-->",token);
  if(token!=null)
  {
    axios.post("http://localhost:4048/sendToken",{"token":token})
    .then((res)=>{
           console.log(res.data);
           this.props.history.push('/welcomeuser');
    })
  }
 }
 checkCredentials(){
    axios.post("http://localhost:4048/signIn",{"userName":this.state.username,"userPassword":this.state.password})
    .then((res)=>{
           console.log(res.data);
           localStorage.setItem('myData', res.data);
           this.props.history.push('/welcomeuser');
    }) 
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
 render() {
   return (
     <div className="Log">
     {/* <div id="bg">
      <img src="images/bg.jpg" alt="">
         */}
         <div className="Login">
           <h2> Log In To Account</h2>
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
         <Button onClick={()=>this.checkCredentials()}> Sign In</Button><p> </p>
         
       </form>
     </div>
     </div>
     // </div>
   );
 }
}
export default withRouter(signUp);