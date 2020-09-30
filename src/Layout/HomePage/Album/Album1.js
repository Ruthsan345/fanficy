import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import firebase from '../../../config/firebase';
import classes from './Album.module.css'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Badge
  } from 'reactstrap';

const db =firebase.firestore()

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1,2,3];

export function timeStampToString(ts)  {
  const date=new Date(ts*1000)
  return date.getFullYear()+'/'+ (date.getMonth()+1) +'/'+date.getDate()
 }

 
 const Album= (props) => {
 // const classes = useStyles();

  return (
    
    <>
    &nbsp;&nbsp;
    &nbsp;
    
    <Card className={classes.ArticleCard}>
    <Link to={{
                    pathname:'edit-article/'+props.data.blogid,
                    state:{blog:props.data}
                  }}>
              <CardImg 
               top
               width="100%"
               src="https://placeimg.com/325/180/any"
               alt="Card Image"
               className={classes.CardImage}
              />
              </Link>
              <CardBody className={classes.CardBody}>
                  <CardTitle className={classes.CardTitle}>
                  <h4>
                  {props.data.title}
                  </h4>
                  </CardTitle>
                  <br></br>
                  <CardSubtitle className={classes.CardSubtitle}>
                  <Typography>
                      
                      { props.data.category}
                      </Typography>
                      <Badge className={classes.createDate}>
                      {}
                      </Badge>
                  </CardSubtitle>
                  <Link to={{
                    pathname:'edit-article/'+props.data.blogid,
                    state:{blog:props.data}
                    }} >
                    <Button variant="contained" color="primary" size="small">Edit</Button>
                  </Link>
                  &nbsp;
                  &nbsp;

                  <Button variant="contained" color="secondary" size="small">Delete</Button>

    
    
              </CardBody>
              </Card>
          

    
        </>

  );
}

export default  Album;