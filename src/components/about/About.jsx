// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import {
  Box,
  Container,
  useMediaQuery,
  Slide,
  Typography,
} from '@material-ui/core';
import {
  withStyles,
} from '@material-ui/styles';

/* -----------------------  Child Components ------------------ */
import Skills from './Skills';

/* -----------------------  Styles ------------------ */
const styles = (theme) => ({
  banner: {
    width: 500,
    heigth: 500,
  },
  container: {
    marginTop: theme.spacing(4),
    zIndex: 1,
    height: '100vh',
  },
  about: {
    fontFamily: 'TitilliumWebRegular',
    letterSpacing: 1.5,
  },
});

/* -----------------------  Types ------------------ */
type Classes = {
  banner: string,
  container: string,
  about: string
}

type Props = {
  classes: Classes
}

/* -----------------------  Component ------------------ */
const About = (props: Props) => {
  const { classes } = props;
  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Slide in direction="down" timeout={600}>
      <Container
        classes={{ root: classes.container }}
        maxWidth="md"
      >
        <Box
          display="flex"
          height="100%"
          flexDirection={smDown ? 'column' : 'row'}
          justifyContent={smDown ? 'center' : 'space-between'}
          alignItems="center"
        >
          <Box mr={5} textAlign="center">
            <Typography variant="subtitle1" classes={{ root: classes.about }}>
              I worked extensively on React Web applications for a year and
              experience in implementing AI projects.
            </Typography>
          </Box>
          <Skills />
        </Box>
      </Container>
    </Slide>
  );
};

export default withStyles(styles)(About);
