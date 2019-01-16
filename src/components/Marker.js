import React, { PureComponent } from "react";
import marker from "../images/marker.png";
import InfoBox from "./Infobox";
import { markerStyle, markerStyleHover } from "./markerStyles";

class Marker extends PureComponent {
  render() {
    // const style = {
    //   zIndex: this.props.$hover? "1000" : "1",
    //   zoom: this.props.$hover? "2" : "1"
    // }
    const style = this.props.$hover ? markerStyleHover : markerStyle;
    return (
      <div style={style}>
        {this.props.$hover && <InfoBox details={this.props.details} />}
        {/* <img src={marker} alt="marker" title={this.props.details.name} /> */}
      </div>
    );
  }
}

export default Marker;
