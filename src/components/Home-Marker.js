import React, { PureComponent } from "react";
import home from "../images/home.png";

class HomeMarker extends PureComponent {
  render() {
    return (
      <div >
        <img src={home} alt="home" />
      </div>
    );
  }
}

export default HomeMarker;
