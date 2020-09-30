import {Avatar} from "@material-ui/core";

import * as React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
//import '../../../index.css';
import firebase from '../../../config/firebase';
import { firestore } from 'firebase';
import PropTypes from 'prop-types';
import $ from "jquery";

import CloseIcon from '@material-ui/icons/Close';
import Link from '@material-ui/core/Link';

class Edit extends React.Component{
    constructor(props){
        super(props);
        this.editer=this.editer.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        this.state={
          username:'',
          bio:'',
          date:'',
          det:'',
          file: '',
          imagePreviewUrl: ''
        }
      }
      componentDidMount()
      {
          
          const id = reactLocalStorage.getObject('id');
          console.log("mounted in edit");
          console.log(id)
          
          firestore().collection('userss').where('id','==',id)
          .get()
          .then(snapshot =>{
              const det=[]
              snapshot.forEach(doc=>{
                  const data=doc.data()
                  det.push(data)
              })
              this.setState({det:det})
              this.state.det.map(userr =>{
                   console.log(userr.username)
                   this.setState({
                   username: this.state.username=userr.username,
                   bio: this.state.bio=userr.bio,
                   date: this.state.date=userr.dob,
                   imagePreviewUrl:this.state.imagePreviewUrl=userr.url
                  });
                  
              });
             
              console.log(snapshot)
          })
          .catch(error=>console.log(error))
      }

      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
          alert(this.state.imagePreviewUrl)
        }
    
        reader.readAsDataURL(file)
      }


      editer(e){
          alert("ajay")
          alert(this.state.imagePreviewUrl)
        e.preventDefault();
          console.log("update");
        const id = reactLocalStorage.getObject('id');
          firestore().collection('userss').doc(id).update({
           bio:this.state.bio,
           url:this.state.imagePreviewUrl,
           username:this.state.username,
           dob:this.state.date,
           
          })
          alert(this.state.imagePreviewUrl)
          console.log(this.state.bio)
          this.props.history.push("/Profile")

      }
      handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
      }
    render()
    {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} class="circular_image"   />);
          
        }
        return(
          <>

<div class="">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <br></br>
           
                <div class="col-lg-12 login-title">
                  <center><h2>Update Bio</h2></center>
                </div>
                <Link href="/profile">
                <CloseIcon />
</Link>
                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form>
                        <div>
                        <center>{$imagePreview}</center>
                        <br/>
                        <br/>
        <form onSubmit={this._handleSubmit}>
         <center><input type="file" onChange={this._handleImageChange} /></center> 
          
        </form>
        
      </div>

                            <div class="form-group">
                                <label class="form-control-label">USERNAME</label>
                                <input type="text" name="username" value={this.state.username}  placeholder="Your name.." onChange={this.handleChange}/>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-control-label">About</label>
                                <textarea rows="10" name="bio"  value={this.state.bio}  placeholder="Your last name.." onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">DOB</label>
                                <input type="date" id="lname" name="date" value={this.state.date} onChange={this.handleChange} placeholder="Your last name.." />

                            </div>

                          
                               
                                <div class="col-lg-6 login-btm login-button float-right text-right">
                                <Link href="/profile">
                                <button alignRight type="button" class="btn btn-outline-danger ">Cancel</button>
                               </Link>
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button type="submit" onClick={this.editer} name='submit' class="btn btn-outline-primary float-right">Submit</button>
                                </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>







            </div>
            </>

        )
    }
}
export default Edit;