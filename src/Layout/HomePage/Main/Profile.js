import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import { firestore } from 'firebase';
import firebase from '../../../config/firebase';
import { Form,FormControl,Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Header1 from './Header1';

//import { Button, Navbar } from 'react-bootstrap'
const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];
class Profile extends React.Component{
    state={
        users: null
    }
    componentDidMount()
    {
        
        const id = reactLocalStorage.getObject('id');
        console.log("mounted");
        console.log(id)
        
        firestore().collection('userss').where('id','==',id)
        .get()
        .then(snapshot =>{
            const users=[]
            snapshot.forEach(doc=>{
                const data=doc.data()
                users.push(data)
            })
            this.setState({users:users})
            console.log(snapshot)
        })
        .catch(error=>console.log(error))
    }
    logout() {
        firebase.auth.signOut().then((result) => {
          this.setState({
            user: null
          })
        })
      }
    render(){
        return(
            <div>
                        <Header1 title="Blog" sections={sections} />

     <Link href="/blog1" >
          <b>
          <ArrowBackIcon label="Back"/> Back to Home
          </b>
          </Link>
     
    
  <br/>
  <br/>
  {
      
  this.state.users &&
  this.state.users.map(userr =>{
      console.log(userr.url)
      return(


            <div class="container1 emp-profile">
            <form >
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={userr.url} class="circular_image"alt=""/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                    {userr.username}
                                    </h5>
                                    <h6>
                                    {userr.email}
                                    </h6>
                                    <p class="proile-rating">DOB : <span>{userr.dob}</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <Link href="/AddBlog">
                    <div class="col-sm-12">
                    <Link href="/EditFile">
       <Button class="profile-edit-btn" name="btnAddMore" variant="success" size="large">
       Edit Bio
        </Button>
        </Link>
                    </div>
                    </Link>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                    
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                         
                                            <div class="col-md-8">
      <p>{userr.bio}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                
                                            </div>
                                            <div class="col-md-6">
      <p></p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                        
                                            </div>
                                            <div class="col-md-6">
      <p></p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            </div>
                                            <div class="col-md-6">
      <p></p>
                                            </div>
                                        </div>
                                    
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>    
  
        </div>
                  
      )
    })
  }   
      
        </div>
        );
    }
}
export default Profile;