import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import img8 from "../images/44.jpg";
import img9 from "../images/95.jpg";
import img10 from "../images/17.jpg";
import img11 from "../images/59.jpg";
import addButton from "../components/addButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    alignItems: "center",
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
}));

export default function Appointment() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img width="96%" src={img8} alt="img" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Melinda Kim"
          secondary="Tomorrow, June 27, 3:00 PM"
        />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img width="96%" src={img9} alt="img" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Rosemary Stewart"
          secondary="Tomorrow, June 27, 3:00 PM"
        />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img width="96%" src={img10} alt="img" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Carlos Castillo"
          secondary="Tuesday, June 30, 15:00 AM"
        />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img width="96%" src={img11} alt="img" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Hugh Moore"
          secondary="Tuesday, June 30, 5:00 PM"
        />
      </ListItem>
      <addButton />
    </List>
  );
}
