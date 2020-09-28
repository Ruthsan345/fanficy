import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import { firestore } from 'firebase';
import firebase from '../../../config/firebase';
import { Form,FormControl,Button,Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
//import { Button, Navbar } from 'react-bootstrap'

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
     
     <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
      </Form>

         <Nav pullRight>
            <NavDropdown alignRight eventKey={0} 
                title={
                    <div className="pull-left">
                           <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />

                    </div>
                } 
                id="basic-nav-dropdown">

                <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={this.logout} href="">Log Out</NavDropdown.Item>
            </NavDropdown>
        </Nav>
  
  </Navbar>
  <br/>
  <br/>
  {this.state.users &&
  this.state.users.map(userr =>{
      return(


            <div class="container1 emp-profile">
            <form >
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-sm btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
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