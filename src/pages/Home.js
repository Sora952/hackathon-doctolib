import React from "react";
import { Paper, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Header from "../components/Navbar";
import { Link } from "react-router-dom";
import img from "../images/img.jpg";

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
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 3
    }px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function HomePage(props) {
  const { classes } = props;
return (
    <div className="home">
      <Header />
      <img src={img} alt="banniere" className="banniere" />
      <div className="auth-button">
        <Link to="/sign">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          component={Link}
          to="/register"
          className={classes.submit}
        >
          Register
        </Button>        </Link>
        <Link to="/login">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          component={Link}
          to="/login"
          className={classes.submit}
        >
          Login
        </Button>        </Link>
      </div>
    </div>
  );


export default withStyles(styles)(Home);

