import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SearchBar from "material-ui-search-bar";
import { NavLink ,Router,Redirect } from 'react-router-dom';
//import Routes from '../../../Routes/Routes';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));


function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

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

  return (
   
    <React.Fragment>
      
  <div className="pull-left">
                           <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />

                    </div>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscibe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
        </Typography>
        <SearchBar
  
  />
  &nbsp;  &nbsp;

<Link href="/">
       <Button  variant="outlined" size="small">
         Log Out
        </Button>
        </Link>
  &nbsp;  &nbsp;

       
       <Link href="/Profile">
       <Button  variant="outlined" size="small">
          Profile
        </Button>
        </Link>
      </Toolbar>
   


      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      

    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;