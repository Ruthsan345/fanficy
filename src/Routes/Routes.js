import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from '../Layout/HomePage/Main/Blog';
import SignUp from '../Layout/Auth/SignUp/SignUp';
import SignIn from '../Layout/Auth/SignIn/SignIn';
import Profile from '../Layout/HomePage/Main/Profile'

import Dashboard from '../Layout/Dashboard/Dashboard'
import fire from '../config/firebase';
import  { Redirect } from 'react-router-dom' 
import EditFile from "../../src/Layout/HomePage/Main/EditFile"


  
  
class Routes extends Component {
    constructor(props){
        super(props);
       
        this.state={
          user:{},
        }
      }
     
    componentDidMount(){
      this.authListener();
    }
    
    authListener(){
      fire.auth().onAuthStateChanged((user)=>{
        if(user){
          this.setState({user});
        }else{
          this.setState({user:null});
        }
      });
    }
  
    render() {
        return (
            <Router>
            <Route exact path="/" component={Blog} />       
            <Route exact path="/SignUp" component={SignUp} />    
            <Route exact path="/SignIn" component={SignIn} /> 
            <Route exact path="/Profile" component={Profile} /> 
           
            <Route exact path="/EditFile" component={EditFile} />   
 
            <Route exact path="/Dashboard"  >
            {this.state.user ? <Redirect to="/Dashboard" /> : <Redirect to="/SignIn"/>}
            </Route>

            <Route exact path="/Dashboard" component={Dashboard} />
      
            </Router>

        )
    }
}

export default Routes;