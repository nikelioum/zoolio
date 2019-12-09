import React, { Component } from "react";
import Main from "./Main";

class Science extends Component {
  state = {
    source6: {
      type: "top-headlines",
      query: "country=gr&category=science"
    }
  };

  render() {
    return (
      <div>
        <Main articles={this.state.source6} />
      </div>
    );
  }
}

export default Science;
