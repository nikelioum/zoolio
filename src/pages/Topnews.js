import React, { Component } from "react";
import Main from "./Main";

class Topnews extends Component {
  state = {
    source2: {
      type: "top-headlines",
      query: "country=gr",
    }
  };

  render() {
    return (
      <div>
        <Main articles={this.state.source2} />
      </div>
    );
  }
}

export default Topnews;
