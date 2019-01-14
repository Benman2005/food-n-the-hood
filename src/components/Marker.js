import React, { PureComponent } from "react";
import marker from "../images/marker.png";
import InfoBox from "./Infobox";

class Marker extends PureComponent {
  render() {
    return (
      <div>
        <img src={marker} alt="marker" title={this.props.details.name} />
        {this.props.$hover && <InfoBox details={this.props.details} />}
      </div>
    );
  }
}

export default Marker;
