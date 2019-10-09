import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Button} from "react-bootstrap";
export default class FirstPage extends Component {
    render() {
        return (
            <div>
              <Button><Link to="/signIn">Sign-In</Link></Button>
              <br></br>
             <Button> <Link to="/signUp">Sign-Up</Link></Button>
            </div>
        )
    }
}
