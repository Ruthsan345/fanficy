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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink ,Router,Redirect } from 'react-router-dom';
import { Form,FormControl,Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

//import Routes from '../../../Routes/Routes';
import Avatar from '@material-ui/core/Avatar';

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const { sections, title } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    
    <React.Fragment>


      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscrbe</Button>
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
  <div className="pull-left">
                           <Avatar id="simple-menu" onClick={handleClick} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
  </div>

  <Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
<MenuItem onClick={handleClose}><NavLink class="NavLink" to="/Profile"> My Profile </NavLink></MenuItem>       
  <MenuItem  onClick={handleClose}> <NavLink  class="NavLink" to="#"> Support </NavLink> </MenuItem>
  <MenuItem onClick={handleClose}><NavLink  class="NavLink" to="/"> Logout </NavLink></MenuItem>
</Menu>

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