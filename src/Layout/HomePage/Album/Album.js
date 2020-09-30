import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
//import Card from '@material-ui/core/Card';
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
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Badge
} from 'reactstrap';


const db =firebase.firestore()



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
                    pathname:'Blog/'+props.data.blogid,
                    state:{blog:props.data}
                    }} >
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
              <h3>
              {props.data.title}
              </h3>
              </CardTitle>
              <CardSubtitle className={classes.CardSubtitle}>
              <Typography>
                  
                  { props.data.category}
                  </Typography>
                  <Badge className={classes.createDate}>
                  {}
                  </Badge>
              </CardSubtitle>
              <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
      />
        <Link to={{
                    pathname:'https://facebook.com/'+props.data.blogid,
                    state:{blog:props.data}
                    }} >
                        <ShareIcon/>
                  </Link>
                        &nbsp;
                        &nbsp;

              <Link to={{
                    pathname:'Blog/'+props.data.blogid,
                    state:{blog:props.data}
                    }} >
                    <Button variant="outlined" color="primary" size="small">View</Button>
                  </Link>


          </CardBody>
          </Card>
      
        </>
  );
}

export default  Album;