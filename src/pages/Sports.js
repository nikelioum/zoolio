import React, { Component } from "react";
import Main from "./Main";

class Sports extends Component {
  state = {
    source1: {
      type: "top-headlines",
      query: "country=gr&category=sports"
    }
  };

  render() {
    return (
      <div>
        <Main articles={this.state.source1} />
      </div>
    );
  }
}

export default Sports;
