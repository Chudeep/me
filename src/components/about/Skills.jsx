// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import {
  Box,
  Typography,
} from '@material-ui/core';
import {
  withStyles,
} from '@material-ui/styles';

/* -----------------------  Child Components ------------------ */
import Stack from '../projects/Stack';

/* -----------------------  Constants ------------------ */
import { skills } from './constant';

/* -----------------------  Styles ------------------ */
const styles = (theme) => ({
  banner: {
    width: 500,
    heigth: 500,
  },
  container: {
    marginTop: theme.spacing(4),
    zIndex: 1,
  },
  skilsLabel: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontFamily: 'TitilliumWeb',
    letterSpacing: 2,
    marginLeft: theme.spacing(1),
  },
});

/* -----------------------  Types ------------------ */
type Classes = {
  skilsLabel: string,
  container: string
}
type Props = {
  classes: Classes
}

/* -----------------------  Component ------------------ */
const Skills = (props: Props) => {
  const { classes } = props;
  return (
    <Box>
      <Typography variant="h6" classes={{ root: classes.skilsLabel }}>
        SKILLS :
      </Typography>
      {skills.map((skill) => <Stack key={skill} label={skill} />)}
    </Box>
  );
};
export default withStyles(styles)(Skills);
