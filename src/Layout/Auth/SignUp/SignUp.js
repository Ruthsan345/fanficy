import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import {reactLocalStorage} from 'reactjs-localstorage';

import {withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import fire from '../../../config/firebase';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
  
const useStyle = withStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

reactLocalStorage.setObject('textval',  "");
class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.signup=this.signup.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.state={
      email:'',
      password:'',
      textval:''
    }
  }

  signup(e){

    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email.trim(),this.state.password).then((u)=>{
      reactLocalStorage.setObject('textval', this.state.email);
      alert("Signup Successfull");
      this.props.history.push("/Dashboard")
   
    }).catch((error)=>{
      alert("Invalid Details");
      console.log(error);
    });
  }


handleChange(e){
    this.setState({ [e.target.name]: e.target.value});
  }

render() {
  const classes = useStyle;

  return (
    <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
		<div class="user_card1">
		<div class="d-flex justify-content-center">
		<div class="brand_logo_container">
		<img src="https://www.logo.wine/a/logo/Google_Account/Google_Account-Logo.wine.svg" class="brand_logo" alt="Logo"/>
		</div>
		</div>
		<div class="d-flex justify-content-center form_container">
		<form>
    <h2>Sign Up</h2>
      <p>Please fill in this form to create an account.</p>
     
		<div class="input-group mb-3">
		<div class="input-group-append">
		<span class="input-group-text"><i class="fas fa-user"></i></span>
		</div>
		<input type="text" name="email" class="form-control input_user" value="" placeholder="email"  value={this.state.email}
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
            onClick={this.signup} >Register</button>
		</div>
		<div class="mt-4">
		<div class="d-flex justify-content-center links">
 have an account? <a href="/SignIn" class="ml-2">Log In</a>
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

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default SignUp;