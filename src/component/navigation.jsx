import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    width: 360,
    position: "fixed",
    bottom: 0,
    backgroundColor:"red",
    zIndex:'200',
  },

  fontText:{
    color:"white",
}
});



function MenuNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/"><BottomNavigationAction className={classes.fontText} label="Recents" icon={<RestoreIcon />} /></Link>
      <Link to="/About"><BottomNavigationAction className={classes.fontText} label="Favorites" icon={<FavoriteIcon />} /></Link>
      <Link to="/Contact"><BottomNavigationAction className={classes.fontText} label="Nearby" icon={<LocationOnIcon />} /></Link>
    </BottomNavigation>
  );
}

export default MenuNavigation;