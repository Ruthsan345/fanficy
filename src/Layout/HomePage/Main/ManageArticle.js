import  React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header1 from './Header1';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Category from './Category';
import Main from './Main';
import AppBar from '@material-ui/core/AppBar';
import Footer from '../Footer/Footer';
import Album from '../Album/Album1';
import fire from '../../../config/firebase';
import {reactLocalStorage} from 'reactjs-localstorage';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

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

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const db =fire.firestore()

class Blog1 extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoaded: false,
            article:[]
        }
    }

    componentDidMount(){
        this.getMyArticles()
       
      
    }
    getMyArticles=()=>{
        const id = reactLocalStorage.getObject('id');
        console.log(id)
        db
            .collection('Userblog/'+id+'/blogs')
            .limit(8)
            .get()
            .then(docs => {
                if(!docs.empty){
                    let allArticles=[]
                    docs.forEach( function(doc)  {
                        const article ={
                            id:doc.id,
                            ...doc.data()
                        }
                        allArticles.push(article)
                    })
                    this.setState({
                        articles: allArticles
                    },()=>{
                        this.setState({
                            isLoaded:true
                        })
                    })
                }
            })
        }

        render(){

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header1 title="Blog" sections={sections} />
      </Container>
      <Container>
          <br></br>
          <Link to={{
                    pathname:'blog1',
                    }} >
          <b>
          <ArrowBackIcon label="Back"/> Back to Home
          </b>
          </Link>
       <center><h1> <b>Manage Articles</b></h1></center> 
                    {
                        this.state.isLoaded?
                        this.state.articles.map((article,index)=>{
                            return(
                                <Album
                                    key={index}
                                    data={article}
                             />


                            )
                        })
                        :''
                    }
                </Container>
    
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
}
export default Blog1;