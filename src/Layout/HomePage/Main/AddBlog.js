import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import firebase from '../../../config/firebase';
import CKEditor from 'ckeditor4-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PropTypes from 'prop-types';
import {storage} from '../../../config/firebase';
import {reactLocalStorage} from 'reactjs-localstorage';
import { firestore } from 'firebase';



class AddBlog extends React.Component{
    constructor(props) {
        super(props);
        this.editerr=this.editerr.bind(this);
        this.onEditorChange = this.onEditorChange.bind( this );
        this.handleChange=this.handleChange.bind(this);
        this.state = {
          file: '',
          imagePreviewUrl: '',
          title:'',
          content:'',
          category:'',
          image:null,
          url:'',
          progress:0,
          currentDateTime: Date().toLocaleString()
        };
     
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
      }
  
    
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
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
      onEditorChange( evt ) {
        this.setState( {
            content: evt.editor.getData()
        } );
    }
    editerr(e)
    {
        e.preventDefault();
        //alert(this.state.content);
        //alert(this.state.imagePreviewUrl);
        //console.log(this.state.imagePreviewUrl);
        alert(this.state.category)
        
        const id = reactLocalStorage.getObject('id');
        const blogid=Math.floor((Math.random() * 99999) + 1).toString();
        
        alert(blogid)
        alert(id)
           e.preventDefault();
           const email = reactLocalStorage.getObject('textval');
        
           console.log(id);
           console.log(email);
           console.log(this.state.email);
           firestore().collection('Userblog').doc(id).collection('blogs').doc(blogid).set({
             imagePreviewUrl:this.state.imagePreviewUrl,
             title:this.state.title,
             content:this.state.content,
             category:this.state.category,
             date:this.state.currentDateTime,
             id:id
             ,
             blogid:blogid
           }).then((u)=>{
            
             alert("Login Sucessfull");
             this.props.history.push("/Blog1")
             var mal=firebase.auth().currentUser.uid
             reactLocalStorage.setObject('id',mal );
           }).catch((error)=>{
             alert("Invalid Credentials");
             console.log(error);
           });
           alert("succ")
           firestore().collection('blogCategory').doc(this.state.category).collection('Blogs').doc().set({
            imagePreviewUrl:this.state.imagePreviewUrl,
           
            title:this.state.title,
            content:this.state.content,
            category:this.state.category,
            date:this.state.currentDateTime,
            id:id,
            blogid:blogid
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

    
    
      render() {
        
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        }
    
        return (
          <div>
              <div class="container">
            <form>
            
              <input type="file" name='image' onChange={this._handleImageChange} />
              <button type="submit" onClick={this.handleUpload}>Upload Image</button>
             
            </form>
            {$imagePreview}
            <br/>
            <br/>
            <form>
            <div class="row">
            <div class="col-25">
      <label for="fname">Title</label>
    </div>
    <div class="col-75">
      <input type="text" name="title" value={this.state.title}  placeholder="Your content.." onChange={this.handleChange}/>
    </div>
    </div>
    <br/>
    <br/>
    <div class="row">
    <div class="col-25">
      <label for="fname">Choose category</label>
    </div>
    <div>
    <select id = "dropdown"  name="category" value={this.state.category} onChange={this.handleChange}>
    <option value="Love">Love</option>
    <option value="Sports">Sports</option>
    <option value="Music">Music</option>
    <option value="Games">Game</option>
    <option value="Action">Action</option>
    <option value="others">others</option>

</select>
</div>
    </div>
    <br/>
    <br/>
    <div class="row">
    <div>
                <CKEditor
                    content={this.state.content}
                    onChange={this.onEditorChange} />
                    
                    <EditorPreview content={this.state.content} />
            </div>
    </div>
  <input type="submit" onClick={this.editerr} value="Submit"/>
            </form>
            
            </div>
          </div>  
        )
      }
    
    }

    class EditorPreview extends React.Component {
        render() {
            return (
                <div className="editor-preview">
                    <h2>Rendered content</h2>
                    <div dangerouslySetInnerHTML={ { __html: this.props.content } }></div>
                </div>
            );
        }
    }
    
    EditorPreview.defaultProps = {
        content: ''
    };
    
    EditorPreview.propTypes = {
        content: PropTypes.string
    };

export default AddBlog;