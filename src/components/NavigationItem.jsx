// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import {
  Box,
  Button,
  IconButton,
  Hidden,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

/* -----------------------  Icons ------------------ */
import {
  HomeOutline,
  InformationOutline,
  LaptopMac,
} from 'mdi-material-ui';

/* -----------------------  Styles ------------------ */
const styles = (theme) => ({
  text: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
    color: theme.palette.background.default,
  },
});

/* -----------------------  Types ------------------ */
type Classes = {
  text: string
}
type Props = {
  classes: Classes,
  handleNavigation: (index: number) => void
}

const iconMap = {
  Home: <HomeOutline />,
  About: <InformationOutline />,
  Projects: <LaptopMac />,
};

/* -----------------------  Component ------------------ */
const NavigationItem = (props: Props) => {
  const { classes, handleNavigation } = props;
  return (
    <Box display="flex">
      {['Home', 'About', 'Projects'].map<any>((item, index) => (
        <React.Fragment key={item}>
          <Hidden smDown>
            <Button
              className={classes.text}
              onClick={() => handleNavigation(index)}
            >
              {item}
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              className={classes.text}
              onClick={() => handleNavigation(index)}
            >
              {iconMap[item]}
            </IconButton>
          </Hidden>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default withStyles(styles)(NavigationItem);
