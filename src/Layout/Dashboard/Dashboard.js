
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import firebase from '../../config/firebase';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import fire from '../../config/firebase';
import  { Redirect } from 'react-router-dom' 
import { render } from '@testing-library/react';
import { firestore } from 'firebase';
import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


class LoginU extends React.Component{
  constructor(props){
    super(props);
   this.loginU=this.loginU.bind(this);
   this.handleChange=this.handleChange.bind(this);
    this.state={
      username:'',
      bio:'',
      date:'',

    }
  }
 
  loginU(e){
    e.preventDefault();
    const email = reactLocalStorage.getObject('textval');
    console.log(email);
    console.log(this.state.email);

    firestore().collection('userss').doc(firebase.auth().currentUser.uid).set({
      username:this.state.username,
      bio:this.state.bio,
      dob:this.state.date,
      email:email,
      id:firebase.auth().currentUser.uid
    }).then((u)=>{
     
      alert("Login Sucessfull");
      this.props.history.push("/Blog1")
      var mal=firebase.auth().currentUser.uid
      reactLocalStorage.setObject('id',mal );
    }).catch((error)=>{
      alert("Invalid Credentials");
      console.log(error);
    });
  }
handleChange(e){
    this.setState({ [e.target.name]: e.target.value});
  }

render() {

  return (

    <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
		<div class="user_card">
		<div class="d-flex justify-content-center">
		<div class="brand_logo_container">
		<img src="https://www.logo.wine/a/logo/Google_Account/Google_Account-Logo.wine.svg" class="brand_logo" alt="Logo"/>
		</div>
		</div>
		<div class="d-flex justify-content-center form_container">
		<form>
    <div class="input-group mb-3">
		<div class="input-group-append">
		<span class="input-group-text"><i class="fas fa-user"></i></span>
		</div>
		<input type="text" name="username" class="form-control input_user" value="" placeholder="username"  value={this.state.username}
                onChange={this.handleChange}/>
		</div>
		<div class="input-group mb-3">
		<div class="input-group-append">
		<span class="input-group-text"><i class="fas fa-user"></i></span>
		</div>
		<input type="text" name="bio" class="form-control input_user" value="" placeholder="Bio"  value={this.state.bio}
                onChange={this.handleChange}/>
		</div>
		<div class="input-group mb-2">
		<div class="input-group-append">
		<span class="input-group-text"><i class="fas fa-key"></i></span>
		</div>
		<input type="date" name="date" class="form-control input_pass" value="" placeholder="date"  value={this.state.date}
                onChange={this.handleChange}/>
		</div>
		<div class="form-group">
		<div class="custom-control custom-checkbox">
		<input type="checkbox" class="custom-control-input" id="customControlInline" />
		<label class="custom-control-label" for="customControlInline">Remember Password</label>
		</div>
		</div>
		</form>
		</div>
		<div class="d-flex justify-content-center mt-3 login_container">
		<button type="button" name="button" class="btn login_btn"
            onClick={this.loginU} >Login</button>
		</div>
		<div class="mt-4">
		<div class="d-flex justify-content-center links">
	Don't have an account? <a href="/SignUp" class="ml-2">Sign Up</a>
		</div>
		<div class="d-flex justify-content-center links">
		<a href="#">Forgot your password?</a>
		</div>
		</div>
		</div>
		</div>
  </div>
  );
}
}

export default LoginU;