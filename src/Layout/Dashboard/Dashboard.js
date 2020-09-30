
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

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = [...document.querySelectorAll(".step p")];
const progressCheck = [...document.querySelectorAll(".step .check")];
const bullet = [...document.querySelectorAll(".step .bullet")];
let max = 4;
let current = 1;
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
     
      alert("Yes, You're in..");
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
<>
<center>
    <div class="container2">
 <center><h1>Say Hello!!</h1></center>     
     <br></br>
<div class="form-outer">
        <form >
          <div class="page slide-page">
            <div class="title">
Welcome !!</div>
<div class="field">
              <div class="label">User Name</div>
                <input type="text" name="username" class="form-control input_user" value="" placeholder="username"  value={this.state.username}
                onChange={this.handleChange} required/>        
                    </div>
        <div class="field">
              <div class="label">Bio</div>
              <input type="text" name="bio" class="form-control input_user" value="" placeholder="Bio"  value={this.state.bio}
                onChange={this.handleChange}/>            </div>
            <div class="field">
            <div class="label">Date Of Birth</div>
            <input type="date" name="date" class="form-control input_pass" value="" placeholder="date"  value={this.state.date}
                onChange={this.handleChange}/>
</div>                
<div class="field">
<button type="button" name="button"
            onClick={this.loginU} >Yes!! I am in..</button>
            </div>
</div>
</form>
</div>
</div>

</center>


  
  </>
  );
}
}

export default LoginU;