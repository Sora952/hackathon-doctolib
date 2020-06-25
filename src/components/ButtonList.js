import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import img4 from "../images/img4.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
            <img src={img4} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary=" Médicaments" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img src={img4} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary=" Médicaments" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img src={img4} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary=" Médicaments" />
      </ListItem>
    </List>
  );
}
