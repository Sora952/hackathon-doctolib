import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import "../styles/Patient.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  ListItem: {
    width: "200px",
    margin: "5px auto",
    border: "2px solid lightgray",
    backgroundColor: "#bdbdbd",
    borderRadius: "10px",
  },
  ListItemText: {
    marginLeft: "5px",
    fontWeight: "bold",
  },
}));

export default function ButtonList() {
  const classes = useStyles();

  return (
    <div className="patient">
      <List className={classes.root}>
        <Link to="/medication_hard">
          <ListItem className={classes.ListItem}>
            <ListItemAvatar>
              <Avatar className={classes.large}>
                <img src={img4} alt="Prescription" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.ListItemText}
              primary="Prescription"
            />
          </ListItem>
        </Link>
        <Link to="/mesures">
          <ListItem className={classes.ListItem}>
            <ListItemAvatar>
              <Avatar className={classes.large}>
                <img src={img5} alt="Mesures" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.ListItemText} primary="Mesures" />
          </ListItem>
        </Link>
        <Link to="/infodoctor">
          <ListItem className={classes.ListItem}>
            <ListItemAvatar>
              <Avatar className={classes.large}>
                <img src={img6} alt="Doctor" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.ListItemText}
              primary="My doctor"
            />
          </ListItem>
        </Link>

        <Link to="/appointment">
          <ListItem className={classes.ListItem}>
            <ListItemAvatar>
              <Avatar className={classes.large}>
                <img src={img7} alt="Appointement" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.ListItemText}
              primary="Appointement"
            />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
