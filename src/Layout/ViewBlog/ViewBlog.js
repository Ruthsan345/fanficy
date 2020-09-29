import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Header from '../HomePage/Header/Header'
import { render } from '@testing-library/react';
import {withRouter} from 'react-router-dom';
import parse from 'html-react-parser';

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

class ViewBlog  extends Component{
    constructor(props){
        super(props);
        this.state={
            blog:{},
           isLoaded:false,
        }
        console.log(this.props);
    }
componentDidMount(){
    if(typeof this.props.location.state !== 'undefined'){
       this.setState({
            blog:this.props.location.state.blog
       }, () => {
           this.setState({
               isLoaded:true
           })
       })
    }
}

    render(){
        if(this.state.isLoaded){
    
        return (
      <>
           <Header title="Blog" sections={sections}/>
        <div>
       
                <center>{parse(this.state.blog.categoryLabel)}</center>  

                <center>{parse(this.state.blog.content)}</center>
             
              

        
        </div>
     </>
       
       );
    }
        else{
            return (
                <div>
                    LOADING...
                </div>
                 );
        }
      
      
      }
}




export default withRouter(ViewBlog);
