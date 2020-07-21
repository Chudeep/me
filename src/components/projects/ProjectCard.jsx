// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Material UI ------------------ */
import {
  Card,
  CardHeader,
  Avatar,
  CardActions,
  CardMedia,
  Typography,
  CardContent,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

/* -----------------------  Child Components ------------------ */
import type { ProjectData } from './utils';
import Stack from './Stack';

/* -----------------------  Styles ------------------ */
const styles = () => ({
  root: {
    maxWidth: 350,
    backgroundColor: '#294672',
  },
  media: {
    paddingTop: '56.25%',
  },
});

/* -----------------------  Types ------------------ */
type Classes = {
  root: string,
  media: string
}
type Props = {
  classes: Classes,
  project: ProjectData
}

/* -----------------------  Component ------------------ */
const ProjectCard = (props: Props) => {
  const {
    classes,
    project: {
      title,
      description,
      date,
      headerImg,
      contentImg,
      actions,
      stacks,
    },
  } = props;
  return (
    <Card
      classes={{ root: classes.root }}
    >
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" src={headerImg} />
        )}
        title={title}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={contentImg}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        {stacks.map((stack) => (
          <Stack
            key={stack}
            label={stack}
          />
        ))}
      </CardContent>
      <CardActions disableSpacing>
        {actions}
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(ProjectCard);
