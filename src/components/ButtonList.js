import React from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100px",
    margin: "auto",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export default function ButtonList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img src={img4} alt="Medication" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Medication" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img src={img5} alt="Analysis" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="My analysis" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img src={img6} alt="Doctor" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="My doctors" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img src={img7} alt="Appointement" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Appointement" />
      </ListItem>
    </List>
  );
}
