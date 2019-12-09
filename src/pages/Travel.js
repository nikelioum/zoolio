import React, { Component } from "react";
import Main from "./Main";

class Travel extends Component {
  state = {
    source5: {
      type: "top-headlines",
      query: "country=gr&category=travel"
    }
  };

  render() {
    return (
      <div>
        <Main articles={this.state.source5} />
      </div>
    );
  }
}

export default Travel;
