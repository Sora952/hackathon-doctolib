import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import firebase from "../firebase";
import { withRouter } from "react-router-dom";

const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function Doctor(props) {
  const { classes } = props;

  if (!firebase.getCurrentUsername()) {
    alert("Please login first");
    props.history.replace("/loginD");
    return null;
  }

  return <main className={classes.main}>Page gestion des patients</main>;
}

export default withRouter(withStyles(styles)(Doctor));
