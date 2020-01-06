import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img
          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
          alt="avatar"
          className="avatar-img" />
          <div className="banner-text"><h1>Full Stack Developer</h1>

          <hr />

          <p>Azure | C# | React | Java | SQL | MongoDb</p>
          <div className="social-links">
            {/* linkedin */}
            <a href="https://google.com" rel="noopener norefferer" target= "_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true">
            </i></a>
            {/*GitHub*/}
            <a href="https://google.com" rel="noopener norefferer" target= "_blank">
            <i className="fa fa-github-square" aria-hidden="true">
            </i></a>
            {/*Work*/}
            <a href="https://google.com" rel="noopener norefferer" target= "_blank">
            <i className="fa fa-youtube-square" aria-hidden="true">
            </i></a>


            </div>
          </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
