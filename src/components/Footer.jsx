// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import {
  Box,
  Divider,
  Typography,
  Hidden,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

/* -----------------------  Icons ------------------ */
import {
  Twitter,
  Linkedin,
  Github,
} from 'mdi-material-ui';

/* -----------------------  Styles ------------------ */
const styles = (theme) => ({
  divider: {
    maxHeight: 200,
    backgroundColor: theme.palette.textGray.dark,
    width: 2,
  },
  email: {
    transform: 'rotate(90deg)',
    color: theme.palette.textGray.main,
    marginBottom: theme.spacing(14),
  },
  icon: {
    color: theme.palette.textGray.main,
    '&:hover': {
      color: theme.palette.textGray.dark,
    },
  },
});

/* -----------------------  Types ------------------ */
type Classes = {
  divider: string,
  email: string,
  icon: string
}
type Props = {
  classes: Classes
}

const iconMap = {
  linkedln: <Linkedin />,
  twitter: <Twitter />,
  github: <Github />,
};

/* -----------------------  Component ------------------ */
const Footer = (props: Props) => {
  const { classes } = props;
  const mobileView = () => (
    <Box
      position="absolute"
      width={1}
      bottom={0}
      zIndex={2}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        height={1}
        width={1}
        alignItems="flex-end"
      >
        <Box display="flex" flexDirection="row">
          {['linkedln', 'twitter', 'github'].map((icon) => (
            <a alt="icon" href="/" key={icon}>
              <Box mb={4} p={2} className={classes.icon}>
                {iconMap[icon]}
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  );
  return (
    <>
      <Hidden mdUp>
        {mobileView()}
      </Hidden>
      <Hidden smDown>
        <Box
          position="absolute"
          width={1}
          height={1}
          bottom={0}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width={1}
            height={1}
          >
            <Box display="flex" ml={8} flexDirection="column" alignItems="center" justifyContent="flex-end">
              <Box mb={4}>
                {['linkedln', 'twitter', 'github'].map((icon) => (
                  <a alt="icon" href="/" key={icon}>
                    <Box mb={1} className={classes.icon}>
                      {iconMap[icon]}
                    </Box>
                  </a>
                ))}
              </Box>
              <Divider classes={{ root: classes.divider }} orientation="vertical" />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-end">
              <Typography classes={{ root: classes.email }}>chudeep@yahoo.in</Typography>
              <Divider classes={{ root: classes.divider }} orientation="vertical" />
            </Box>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};
export default withStyles(styles)(Footer);
