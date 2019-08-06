import React from "react";
import "./Header.css";
import "./Tiles.css";
import Header from "./components/Header";
import Tiles from "./components/Tiles";
import AddTile from "./components/AddTile";
import AddTileForm from "./components/AddTileForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./components/Error";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  handleToggle() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const isVisible = this.state.isVisible;

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route>
              <div style={{ display: "inline-flex" }}>
                {this.state.isVisible ? (
                  <AddTile
                    handleToggle={this.handleToggle.bind(this)}
                    isVisible={isVisible}
                  />
                ) : (
                  <AddTileForm
                    handleToggle={this.handleToggle.bind(this)}
                    isVisible={isVisible}
                  />
                )}
                <Route component={Tiles} path='/:id?' />
              </div>
            </Route>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
