import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
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
import firebase from '../../../config/firebase'

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
  const classes = useStyles();

  return (
    
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={5} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Link to={{
                    pathname:'Blog/'+props.data.blogid,
                    state:{blog:props.data}
                  }}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://placeimg.com/325/180/any"
                    title="Image title"
                  />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {props.data.title}
                    </Typography>
                    <Typography>
                  
                    <br></br>
                    { props.data.category}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Link to={{
                    pathname:'Blog/'+props.data.blogid,
                    state:{blog:props.data}
                    }} >
                    <Button size="small">View</Button>
                  </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      
  );
}

export default  Album;