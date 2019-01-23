import React, { PureComponent } from "react";
import InfoBox from "./Infobox";
import { markerStyle, markerStyleHover } from "./markerStyles";

class Marker extends PureComponent {
  render() {
    const style = this.props.$hover ? markerStyleHover : markerStyle;
    return (
      <div style={style}>
        {this.props.$hover && <InfoBox details={this.props.details} />}
      </div>
    );
  }
}

export default Marker;
