import React, { PureComponent } from "react";
import home from "../images/home.png";

class HomeMarker extends PureComponent {
  render() {
    // const hoverStyle = { border: " 3px solid green" };
    // const regularStyle = { border: "none" };
    // const style = this.props.$hover ? hoverStyle : regularStyle;
    console.log(this.props);
    return (
      <div >
        <img src={home} alt="home" />
      </div>
    );
  }
}

export default HomeMarker;
