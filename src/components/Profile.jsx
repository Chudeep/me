// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import {
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

/* -----------------------  Styles ------------------ */
const styles = (theme) => ({
  hi: {
    color: theme.palette.textGray.dark,
    fontFamily: 'TitilliumWebRegular',
    letterSpacing: 2,
  },
  im: {
    color: theme.palette.background.default,
    fontWeight: 700,
    fontFamily: 'TitilliumWeb',
    letterSpacing: 2,
  },
  name: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontFamily: 'TitilliumWeb',
    letterSpacing: 2,
  },
  whatim: {
    color: theme.palette.background.default,
    fontFamily: 'TitilliumWebRegular',
    letterSpacing: 1.5,
  },
  lead: {
    color: theme.palette.background.default,
    fontFamily: 'TitilliumWebRegular',
    letterSpacing: 1.5,
    fontSize: '1rem',
  },
  work: {
    color: theme.palette.primary.main,
    fontFamily: 'TitilliumWeb',
  },
  resume: {
    minWidth: 140,
  },
  contact: {
    minWidth: 140,
    backgroundColor: '#294672',
  },
});

/* -----------------------  Types ------------------ */
type Classes = {
  hi: string,
  name: string,
  whatim: string,
  resume: string,
  contact: string,
  im: string,
  lead: string,
  work: string
}
type Props = {
  classes: Classes
}

/* -----------------------  Component ------------------ */
const Profile = (props: Props) => {
  const { classes } = props;
  return (
    <Box minWidth={300}>
      <Typography className={classes.hi}>
        Hey there,
      </Typography>
      <Typography variant="h4" component="div" className={classes.im}>
        I&apos;m
        <Typography
          classes={{ root: classes.name }}
          variant="h4"
          display="inline"
        >
          {' '}
          Chudeep Shankar,
        </Typography>
      </Typography>
      <Typography variant="h5" className={classes.whatim}>
        a web developer with interests in building AI applications.
      </Typography>
      <Box
        display="flex"
        mt={4}
        flex-direction="row"
        align="center"
        justifyContent="space-around"
      >
        <Button
          className={classes.resume}
          color="primary"
          href="https://github.com/Chudeep/me/raw/master/src/resume.pdf?raw=true"
          variant="contained"
        >
          Resume
        </Button>
        <Button
          href="mailto:chudeep@yahoo.in"
          className={classes.contact}
          variant="contained"
          color="secondary"
        >
          Contact me
        </Button>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Profile);
