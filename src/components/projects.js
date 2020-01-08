import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  workTab() {
    return (
      <div className="projects-grid">
        {/* Project 1 */}
        < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
        }>
          <CardTitle style={{ color: '#black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LpDrkHxE25QIzQbSF-flFAHaHa%26pid%3DApi&f=1.jpg) center / cover' }}>
            React Project #1
        </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card >

        {/* Project 2 */}
        < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: '#black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LpDrkHxE25QIzQbSF-flFAHaHa%26pid%3DApi&f=1.jpg) center / cover' }}>
            React Project #1
        </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card >

        {/* Project 3 */}
        < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{ color: '#black', height: '176px', background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LpDrkHxE25QIzQbSF-flFAHaHa%26pid%3DApi&f=1.jpg) center / cover' }}>
            React Project #1
      </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card >
      </div>
    )
  }
  toggleCategories() {
    switch (this.state.activeTab) {
      case 0:
        return this.workTab();
      case 1:
        return <div><h1>This is Academic</h1></div>
      case 2:
        return <div><h1>This is Hobby</h1></div>
      default:
        return <div></div>
    }
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Professional</Tab>
          <Tab>Academic</Tab>
          <Tab>Hobby</Tab>
        </Tabs>
        <Grid >
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
