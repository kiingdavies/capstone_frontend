import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//Faker for the content images
import faker from "faker";

//MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

class Gif extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes
      //   gif: { body, createdAt, gifImage, gifid, likeCount, commentCount }
    } = this.props;
    return (
      <Card className={classes.card}>
        <div>
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
          </a>
        </div>
        <CardMedia /*title="Profile Image"*/
        /*image={gifImage}*/
        //   className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link} /*to={`/users/${userHandle}`}*/
            color="primary"
          >
            <p>User Handle/Name</p>
            {/* {userHandle} */}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            <p>createdAt 4:30pm</p>
            {dayjs(
              new Date()
            ).fromNow() /* normally {createdAt}should ne here not new Date()*/}
          </Typography>
          <Typography variant="body1">
            <p>Content</p>
            {/*body*/}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Gif);
