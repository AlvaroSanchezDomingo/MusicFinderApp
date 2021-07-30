import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import img from '../../images/notfound.png'


const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function TrackCard({ track, action }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={
          <Typography variant="h5" component="p">
            {track.title}{" "}
          </Typography>
        }
        subheader={track.subtitle}
      />
      <CardMedia
        className={classes.media}
        image={
          track.images
            ? `${track.images.coverart}`
            : img
        }
      />
    </Card>
  );
}