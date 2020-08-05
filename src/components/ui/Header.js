import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logo from '../../assets/logo.svg';

const pathMap = {
  "/": 0,
  "/services": 1,
  "/customsoftware": 1,
  "/mobileapps": 1,
  "/websites": 1,
  "/revolution": 2,
  "/about": 3,
  "/contact": 4

}
const menuMap = {
  "/services": 0,
  "/customsoftware": 1,
  "/mobileapps": 2,
  "/websites": 3

}


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em"
  },
  logo: {
    height: "4.6em"
  },
  logoContainer: {
    padding: 0

  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 5,
    marginLeft: "10px",
    fontSize: ".8rem"
  },
  button: {
    borderRadius: '25px',
    marginLeft: '10px',
    marginRight: '10px',
    minWidth: "10px",
    height: "30px",
    ...theme.typography.estimate
  },
  menu: {
    backgroundColor:theme.palette.primary.main,
    color: 'white',
    borderRadius:"0px"
  },
  menuItem: {
    ...theme.typography.tab,
    fontSize:".8rem",
    opacity:0.7,
    "&:hover": {
      opacity:1
    }
  },
}))

const options = {
  'Services': "/services",
  'Custom Software Development':'/customsoftware',
  'Mobile App Development':'/mobileapps',
  'Website Development': '/websites'
}


const Header = (props) => {
  const [tabIndex, setTabindex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    setTabindex(pathMap[window.location.pathname]);
    setSelectedIndex(menuMap[window.location.pathname]);
  }, [tabIndex,selectedIndex ])


  const tabHandler = (event, index) => {
    setTabindex(index);
  }
  const buttonHandler = () => {
    setTabindex(0)
  }

  const menuHandler = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const menuCloseHandler = () => {
    setAnchorEl(null);
  }
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setTabindex(1);
  }
  const classes = useStyles();
  const renderMenu = () => {
    return (
      <Menu
        classes={{paper: classes.menu}}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={menuCloseHandler}
        MenuListProps={{onMouseLeave: menuCloseHandler}}
        elevation={0}
      >
        {Object.keys(options).map((option, index) => (
          <MenuItem
            component={Link}
            classes={{root: classes.menuItem}}
            to={options[option]}
            key={option}
            selected={index === selectedIndex }
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    )
  }

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link} to="/"
              onClick={buttonHandler}
              className={classes.logoContainer}
            >
              <img className={classes.logo} alt="logo" src={logo} />
            </Button>
            <Tabs indicatorColor="primary" value={tabIndex} onChange={tabHandler} className={classes.tabContainer}>
              <Tab className={classes.tab} label="Home" component={Link} to="/" />
              <Tab 
                aria-owns={anchorEl ? "simple-menu": undefined}
                aria-haspopup = {anchorEl ? true: undefined}
                onMouseOver ={menuHandler} 
                className={classes.tab} 
                label="Services"
                component={Link} 
                to="/services" 
              />
              <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
              <Tab className={classes.tab} label="About us" component={Link} to="/about" />
              <Tab className={classes.tab} label="Contact us" component={Link} to="/contact" />
            </Tabs>
            <Button className={classes.button} variant="contained" color="secondary">Free Estimate</Button>
           
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {renderMenu()}
      <div className={classes.toolbarMargin}></div>
    </>
  )
}

export default Header
