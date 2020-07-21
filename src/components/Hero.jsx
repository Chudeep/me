// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import {
  Box,
  Container,
  useMediaQuery,
  Grow,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

/* -----------------------  Child Component ------------------ */
import Profile from './Profile';

/* -----------------------  Styles ------------------ */
const styles = (theme) => ({
  banner: {
    width: 500,
    height: 500,
    [theme.breakpoints.down('xs')]: {
      width: 200,
      height: 200,
    },
  },
  container: {
    marginTop: theme.spacing(4),
    zIndex: 1,
    height: '100vh',
  },
});

/* -----------------------  Types ------------------ */
type Classes = {
  banner: string,
  container: string
}
type Props = {
  classes: Classes
}

/* -----------------------  Component ------------------ */
const Hero = (props: Props) => {
  const { classes } = props;
  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Grow in direction="down" timeout={600}>
      <Container
        classes={{ root: classes.container }}
        maxWidth="md"
      >
        <Box
          display="flex"
          flexDirection={smDown ? 'column' : 'row'}
          justifyContent={smDown ? 'center' : 'space-between'}
          alignItems="center"
          height="100%"
        >
          <Profile />
          <img className={classes.banner} alt="Banner" src="/man.svg" />
        </Box>
      </Container>
    </Grow>
  );
};

export default withStyles(styles)(Hero);
