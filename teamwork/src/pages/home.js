import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Gif from "../components/Gif";

class home extends Component {
  state = {
    gifs: null
  };
  componentDidMount() {
    //Fetch from server installed axios connected to my postgresql in package.json called proxy
    axios
      .get("/gifs")
      .then(res => {
        this.setState({
          gifs: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let {recentGifsMarkup} = this.state.gifs ? ( //This gets data from the db
      this.state.gifs.map(gif => <Gif key={gif.gifId} gif={gif}/>)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentGifsMarkup} 
          
          <Gif />
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
        <Grid item sm={8} xs={12}>
          {/* {recentGifsMarkup}  */}
          <Gif />
        </Grid>
      </Grid>
    );
  }
}

export default home;
