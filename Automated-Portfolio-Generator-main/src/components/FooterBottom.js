import React from 'react'
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3)
  },
}));

// THIS FUNCTION ISN'T CALLED
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
        PortfolioGen
    </Typography>
  );
}

function FooterBottom() {
  const classes = useStyles();
  return (
    
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        PortfolioGen
      </Typography>
      <Copyright />
    </footer>
    
  )
}

export default FooterBottom