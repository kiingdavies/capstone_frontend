import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex"
  }
};

class Gif extends Component {
  render() {
    // const {
    //   classes,
    // //   gif: { body, createdAt, gifImage, gifid, likeCount, commentCount }
    // } = this.props;
    return (
      <Card>
        <CardMedia /*image={gifImage}*/ title="Gif Image" />
        <CardContent>
          <Typography variant="h5">
            <p>User Handle/Name</p>
            {/* {userHandle} */}
          </Typography>

          <Typography variant="body2" color="textSecondary"><p>createdAt 4:30pm</p>{/*createdAt*/}</Typography>
          <Typography variant="body1"><p>Content</p>{/*body*/}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Gif);
