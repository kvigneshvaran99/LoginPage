import React from 'react';
import './App.css';
import FirstPage from "./components/firstPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Welcome from "./components/Welcome";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" ><FirstPage/></Route>
        <Route path="/signUp"><SignUp/></Route>
        <Route path="/signIn"><SignIn/></Route>
        <Route path="/welcomeuser"><Welcome/></Route>
      </Router>
      
    </div>
  );
}

export default App;
