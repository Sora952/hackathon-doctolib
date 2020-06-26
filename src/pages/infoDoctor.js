import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import "../styles/infoDoctor.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `auto ${theme.spacing(3)}px`,
    padding: theme.spacing(2),
    backgroundColor: "#eee",
  },
  typo: {
    fontSize: "1.1rem",
    height: "25px",
    marginTop: "auto",
    marginBottom: "auto",
    width: "250px",
  },
  doctorPhotoName: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "25px",
  },
  doctorPhoto: {
    height: "20vw",
    width: "20vw",
  },
  infostyle: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  doctorPhotoOther: {
    margin: "auto",
    height: "80px",
  },
}));

const doctorName = "Armin LeGrandFou";
const mail = "grandFanDe@materialUI.fr";
const numero = "06 66 66 66 66";
const location = "At home";

const InfoDoctor = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>My prefer doctor</h1>
      <div className="info-doctor">
        <div className={classes.doctorPhotoName}>
          <Grid item>
            <Avatar
              className={classes.doctorPhoto}
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
            />
          </Grid>
          <Typography noWrap className={classes.typo}>
            {doctorName}
          </Typography>
        </div>

        <div className={classes.infostyle}>
          <Grid item>
            <EmailIcon className={classes.doctorPhotoOther} fontSize="large" />
          </Grid>
          <Paper className={classes.paper}>
            <Typography noWrap className={classes.typo}>
              {mail}
            </Typography>
          </Paper>
        </div>

        <div className={classes.infostyle}>
          <Grid item>
            <CallIcon className={classes.doctorPhotoOther} fontSize="large" />
          </Grid>
          <Paper className={classes.paper}>
            <Typography noWrap className={classes.typo}>
              {numero}
            </Typography>
          </Paper>
        </div>

        <div className={classes.infostyle}>
          <Grid item>
            <PersonPinCircleIcon
              className={classes.doctorPhotoOther}
              fontSize="large"
            />
          </Grid>
          <Paper className={classes.paper}>
            <Typography noWrap className={classes.typo}>
              {location}
            </Typography>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default InfoDoctor;
