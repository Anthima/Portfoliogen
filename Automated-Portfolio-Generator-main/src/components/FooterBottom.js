import React from 'react'
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#dedede',
    position: 'absolute',
    left: '0',
    bottom: '0',
    height: '45px',
    width: '100%',
    overflow: 'hidden'
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
      {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p"> */}
        <p style={{textAlign: 'center', fontSize: '15px'}}>PortfolioGen - Group 14</p>
      {/* </Typography> */}
      {
      /* </Copyright> */
      }
    </footer>
  )
}

export default FooterBottom