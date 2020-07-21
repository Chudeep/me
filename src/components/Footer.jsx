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

const footerLinks = [
  {
    title: 'Linkedin',
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/chudeep-shankar/',
  },
  {
    title: 'Twitter',
    icon: <Twitter />,
    url: 'https://www.twitter.com/Chudeep/',
  },
  {
    title: 'Github',
    icon: <Github />,
    url: 'https://www.github.com/Chudeep/',
  },

];

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
          {footerLinks.map(({ title, icon, url }) => (
            <a
              alt={`${title}-icon`}
              href={url}
              key={title}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Box mb={4} p={2} className={classes.icon}>
                {icon}
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
                {footerLinks.map((item) => (
                  <a
                    alt="icon"
                    href={item.url}
                    key={item.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Box mb={1} className={classes.icon}>
                      {item.icon}
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
