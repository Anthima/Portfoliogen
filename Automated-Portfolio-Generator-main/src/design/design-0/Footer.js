import { Button, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F7F8F9',
    minHeight: '20vh',
    flexWrap: 'wrap',
  },
  icon: {
    color: '#0035C9'
  }
}));

function Footer({ links }) {
  const classes = useStyles();

  return (

    


    <Paper className={classes.root}  id="contact">

      <h2>CONNECT WITH ME ON:</h2>

      {links.Github && <Button href={links.Github}>
        <GitHubIcon fontSize='large' className={classes.icon} />
      </Button>}

      {links.Facebook && <Button href={links.Facebook}>
        <FacebookIcon fontSize='large' className={classes.icon} />
      </Button>}

      {links.Twitter && <Button href={links.Twitter}>
        <TwitterIcon fontSize='large' className={classes.icon} />
      </Button>}

      {links.Instagram && <Button href={links.Instagram}>
        <InstagramIcon fontSize='large' className={classes.icon} />
      </Button>}

      {links.LinkedIn && <Button href={links.LinkedIn}>
        <LinkedInIcon fontSize='large' className={classes.icon} />
      </Button>}
    </Paper>
  )
}

export default Footer
