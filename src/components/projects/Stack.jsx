// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import { Chip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

/* -----------------------  Styles ------------------ */
const styles = (theme) => ({
  root: {
    minWidth: 60,
    margin: theme.spacing(1),
    backgroundColor: theme.palette.textGray.main,
  },
});

/* -----------------------  Types ------------------ */
type Classes = {
  root: string,
  media: string
}
type Props = {
  classes: Classes,
  label: string
}

/* -----------------------  Component ------------------ */
const Stack = (props: Props) => {
  const { classes, label } = props;

  return (
    <Chip
      classes={{ root: classes.root }}
      label={label}
    />
  );
};
export default withStyles(styles)(Stack);
