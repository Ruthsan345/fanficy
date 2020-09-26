import * as React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import '../../../index.css';
import firebase from '../../../config/firebase';
import { firestore } from 'firebase';
import PropTypes from 'prop-types';
class Edit extends React.Component{
    constructor(props){
        super(props);
        this.editer=this.editer.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
          username:'',
          bio:'',
          date:'',
          det:''
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
                   date: this.state.date=userr.dob
                  });
                  
              });
             
              console.log(snapshot)
          })
          .catch(error=>console.log(error))
      }
      editer(e){
        e.preventDefault();
          console.log("update");
        const id = reactLocalStorage.getObject('id');
          firestore().collection('userss').doc(id).update({
           bio:this.state.bio,
           username:this.state.username,
           dob:this.state.date
          })
          console.log(this.state.bio)
          this.props.history.push("/Profile")

      }
      handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
      }
    render()
    {
        return(
            <div>
            <h2>Responsive Form</h2>
<p>Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other.</p>

<div class="container">
  <form>
  <div class="row">
    <div class="col-25">
      <label for="fname">Username</label>
    </div>
    <div class="col-75">
      <input type="text" name="username" value={this.state.username}  placeholder="Your name.." onChange={this.handleChange}/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Bio</label>
    </div>
    <div class="col-75">
      <input type="text"  name="bio"  value={this.state.bio}  placeholder="Your last name.." onChange={this.handleChange} />
    </div>
  </div>
 
  <div class="row">
    <div class="col-25">
      <label for="subject">DoB</label>
    </div>
    <div class="col-75">
      <input type="date" id="lname" name="date" value={this.state.date} placeholder="Your last name.." />
    </div>
  </div>
  <div class="row">
    <input type="submit" onClick={this.editer} value="Submit" />
  </div>
  </form>
</div>
            </div>
        )
    }
}
export default Edit;