import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Header from '../../HomePage/Main/Header1'
import { render } from '@testing-library/react';
import {withRouter} from 'react-router-dom';
import parse from 'html-react-parser';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css';
import Typography from '@material-ui/core/Typography';
import firebase from '../../../config/firebase';
import CKEditor from 'ckeditor4-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {storage} from '../../../config/firebase';
import {reactLocalStorage} from 'reactjs-localstorage';
import { firestore } from 'firebase';
import CloseIcon from '@material-ui/icons/Close';

const sections = [
    { title: 'Technology', url: '/Tech' },
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


  
  
  
  class EditBlog extends React.Component{
      constructor(props) {
          super(props);
          this.editer=this.editer.bind(this);
          this.onEditorChange = this.onEditorChange.bind( this );
          this.handleChange=this.handleChange.bind(this);
         
          this.state = {
            blog:{},
            det:'',
            isLoaded:false,
            file: '',
            imagePreviewUrl: '',
            title:'',
            content:'',
            category:'',
            image:null,
            url:'',
            progress:0,
            currentDateTime: Date().toLocaleString(),
          };
       
          console.log(this.props);
        

          this._handleImageChange = this._handleImageChange.bind(this);
          this._handleSubmit = this._handleSubmit.bind(this);
        }
    
        componentDidMount(){
          
        /*  const id = reactLocalStorage.getObject('id');
          console.log("mounted in edit");
          console.log(id)
          alert("vanta")
          firestore().collection('Userblog').doc(id).collection('blogs').doc(this.props.location.state.blog.blogid)
          .onSnapshot(snapshot=>{
            console.log(snapshot.docs());
          })
          */
         const id = reactLocalStorage.getObject('id');
          console.log("mounted in edit");
          console.log(id)
          alert("vanta")
          alert(this.props.location.state.blog.blogid)
          firestore().collection('Userblog').doc(id).collection('blogs').where('blogid','==',this.props.location.state.blog.blogid)
          .get()
          .then(snapshot =>{
            alert("po")
              const det=[]
              console.log("ko")
              snapshot.forEach(doc=>{
                  const data=doc.data()
                  console.log("snap")
                  det.push(data)
              })
              console.log("det")
              this.setState({det:det})
              this.state.det.map(userr =>{
                   console.log(userr.username)
                   this.setState({
                    blogid:this.state.blogid=userr.blogid,
                    title: this.state.title=userr.title,
                    category: this.state.category=userr.category,
                    content: this.state.content=userr.content,
                    imagePreviewUrl:this.state.imagePreviewUrl=userr.imagePreviewUrl
                  });
                  
              });
             
              console.log(snapshot)
          })
          .catch(error=>console.log(error))
          alert(5)
          alert(this.state.title)
          /*alert(15)
          alert(this.props.location.state.blog.blogid)
               this.setState({
                    blog:this.props.location.state.blog
                    
               }, () => {
                 alert(1)
                alert(this.state.blog.blogid)
                   this.setState({
                    blogid:this.state.blogid=this.state.blog.blogid,
                    title: this.state.title=this.state.blog.title,
                    category: this.state.category=this.state.blog.category,
                    content: this.state.content=this.state.blog.content,
                    isLoaded:true
                   })
               })
           
           alert(this.state.content)*/
           alert("ajay")
           
        }
       
        _handleSubmit(e) {
          e.preventDefault();
          // TODO: do something with -> this.state.file
          alert(this.state.content)
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
          }
      
          reader.readAsDataURL(file)
        }
        handleChange(e){
          this.setState({ [e.target.name]: e.target.value});
        }
        handleEditorChange() {
          return ( event, editor ) => {
            this.setState( { content: editor.getData() } );
            console.log( this.state );
          }
        }
        onEditorChange( evt ) {
          this.setState( {
              content: evt.editor.getData()
          } );
      }


   editer(e){
          alert("ajay")
          alert(this.state.imagePreviewUrl)
        e.preventDefault();
          console.log("update");
        const id = reactLocalStorage.getObject('id');
        firestore().collection('Userblog').doc(id).collection('blogs').doc(this.props.location.state.blog.blogid).update({
           category:this.state.category,
           content:this.state.content,
           imagePreviewUrl:this.state.imagePreviewUrl,
           title:this.state.title,
           
          })
          alert(this.state.imagePreviewUrl)
          console.log(this.state.bio)
          this.props.history.push("/blog1")

      }
      handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
      }
  
      
      
        render() {
          
          let {imagePreviewUrl} = this.state;
          let $imagePreview = null;
          if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} width="50%"/>);
          }
          const dataq=this.state.content;
          return (
              <>
  
              <div class="container3">
                      <div class="row">
                          <div class="col-lg-3 col-md-2"></div>
                          <div class="col-lg-6 col-md-8 login-box">
                              <div class="col-lg-12 login-key">
                                  <i class="fa fa-key" aria-hidden="true"></i>
                              </div>
                              <br></br>
                         
                              <div class="col-lg-12 login-title">
                                <center><h2><b>Edit Article</b></h2></center>
                              </div>
                              <Link href="/manage">
                              <CloseIcon />
                               </Link>
                              <div class="col-lg-12 login-form">
                                  <div class="col-lg-12 login-form">
                                      <form>
                                      <center>{$imagePreview}</center>
                                      <br/>
                                      <br/>
                                        <center> <div class="form-group">
                                          
                                          <input type="file" name='image' onChange={this._handleImageChange} />
                                           
                                        </div></center> 
                                        <br></br>
                                        
                                          
                                          <div class="form-group">
                                              <label class="form-control-label">Title</label>
                                              <input type="text" name="title" value={this.state.title}  placeholder="Your content.." onChange={this.handleChange}/>
                                          </div> 
                                          <div class="form-group ">
                                          <label for="fname">Choose category</label>                                      
                                          <select id = "dropdown"  name="category" value={this.state.category} onChange={this.handleChange}>
                                          <option value="Love">Love</option>
                                          <option value="Sports">Sports</option>
                                          <option value="Music">Music</option>
                                          <option value="Games">Game</option>
                                          <option value="Action">Action</option>
                                          <option value="others">others</option>
  
                                      </select>
                                      </div>
                                          <div class="form-group containerx">
                                              <label class="form-control-label">Write your Content here</label>
                                              <CKEditor 
                                                 data={this.state.content}
                                                 onChange={this. onEditorChange} />                           
                                          </div>
                                          <div class="form-group">
             
                                          </div>
              
                                        
                                             <br/>
                                             <br/>
                                              <div class="col-lg-6 login-btm login-button float-right text-right">
                                              <Link href="/manage">
                                              <button alignRight type="button" class="btn btn-outline-danger ">Cancel</button>
                                             </Link>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                  <button type="submit" onClick={this.editer} name='submit' class="btn btn-outline-success float-right">Submit</button>
                                              </div>
                                      </form>
                                  </div>
                              </div>
                              <div class="col-lg-3 col-md-2"></div>
                          </div>
                      </div>
      
                          </div>
                          <br/>
                                             <br/>
                                             <div class="container1"> <center><EditorPreview content={this.state.content} /></center> </div>
                    
        
            </>
          )
        }
      
      }
  
      class EditorPreview extends React.Component {
          render() {
              return (
                  <div className="editor-preview">
                      <h2>Content Preview</h2>
                      <div dangerouslySetInnerHTML={ { __html: this.props.content } }></div>
                  </div>
              );
          }
      }
      
     
  export default EditBlog;

