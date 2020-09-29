import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from '../Layout/HomePage/Main/Blog';
import Blog1 from '../Layout/HomePage/Main/Blog1';
import SignUp from '../Layout/Auth/SignUp/SignUp';
import SignIn from '../Layout/Auth/SignIn/SignIn';
import Profile from '../Layout/HomePage/Main/Profile'
import ViewBlog from '../Layout/ViewBlog/ViewBlog'
import Dashboard from '../Layout/Dashboard/Dashboard'
import Header1 from '../Layout/HomePage/Main/Header1';
import AddBlog from '../Layout/HomePage/Main/AddBlog';
import fire from '../config/firebase';
import  { Redirect } from 'react-router-dom' 
import EditFile from "../../src/Layout/HomePage/Main/EditFile"

import ManageArticle from "../Layout/HomePage/Main/ManageArticle";
import EditArticle from "../Layout/HomePage/Main/EditArticle";
  
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
            <Route exact path="/Blog1" component={Blog1} />      
            <Route exact path="/SignUp" component={SignUp} />    
            <Route exact path="/SignIn" component={SignIn} /> 
            <Route exact path="/Profile" component={Profile} /> 
            <Route exact path="/Header1" component={Header1} /> 
            <Route exact path="/EditFile" component={EditFile} />   
           <Route exact path="/AddBlog" component={AddBlog} />   
           <Route exact path="/Manage" component={ManageArticle} />   
           <Route exact path="/edit-article/:id" component={EditArticle} />   

            <Route exact path="/Dashboard"  >
            {this.state.user ? <Redirect to="/Dashboard" /> : <Redirect to="/SignIn"/>}
            </Route>
            <Route path="/Blog/:id" component={ViewBlog}/>
            <Route exact path="/Dashboard" component={Dashboard} />
      
            </Router>

        )
    }
}

export default Routes;