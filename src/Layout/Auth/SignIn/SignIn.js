import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {reactLocalStorage} from 'reactjs-localstorage';
//import '../../../index.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import fire from '../../../config/firebase';
import  { Redirect } from 'react-router-dom' 
import { render } from '@testing-library/react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[40]
        : theme.palette.grey[700],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
class Login extends React.Component{
  constructor(props){
    super(props);
   this.login=this.login.bind(this);
   this.handleChange=this.handleChange.bind(this);
    this.state={
      email:'',
      password:'',
    }
  }

  login(e){

    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email.trim(),this.state.password).then((u)=>{
      alert("Login Sucessfull");
     // reactLocalStorage.setObject('textval', this.state.email);
     var mal=fire.auth().currentUser.uid
      reactLocalStorage.setObject('id',mal );
      this.props.history.push("/Blog1")
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
    <h2>Login In</h2>
      <p>Please fill in this form </p>
     
		<div class="input-group mb-3">
		<div class="input-group-append">
		<span class="input-group-text"><i class="fas fa-user"></i></span>
		</div>
		<input type="text" name="email" class="form-control input_user" value="" placeholder="username or email"  value={this.state.email}
                onChange={this.handleChange}/>
		</div>
		<div class="input-group mb-2">
		<div class="input-group-append">
		<span class="input-group-text"><i class="fas fa-key"></i></span>
		</div>
		<input type="password" name="password" class="form-control input_pass" value="" placeholder="password"  value={this.state.password}
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
            onClick={this.login} >Login</button>
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

export default Login;