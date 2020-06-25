import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import '../styles/infoDoctor.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(3)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: '#37aad4',
  },
  typo: {
    marginTop: '10px',
  },
}));

const doctorName = 'armin LeGrandFou';
const mail = 'grandFanDe@materialUI.fr';
const numero = '06 66 66 66 66';
const location = 'Chez lui, à faire ses PR de la nuit.';

const InfoDoctor = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Mon Médecin-Esclavagiste</h1>
  <div className='info-doctor'>
    <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap className={classes.typo}>{doctorName}</Typography>
          </Grid>
        </Grid>
      </Paper>
    <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <EmailIcon fontSize='large'/>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap className={classes.typo}>{mail}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <CallIcon fontSize='large'/>
          </Grid>
          <Grid item xs>
            <Typography noWrap className={classes.typo}>{numero}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <PersonPinCircleIcon fontSize='large' />
          </Grid>
          <Grid item xs>
            <Typography className={classes.typo}>{location}</Typography>
          </Grid>
        </Grid>
      </Paper>
  </div>
  </div>
  )
};

export default InfoDoctor;