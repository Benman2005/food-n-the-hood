import React, { PureComponent } from "react";

class InfoBox extends PureComponent {
  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid white",
      color: "blue",
      width: "80px",
      zIndex: "1000"
    };

    return (
      <div style={style}>
        <p>{this.props.details.name}</p>
        <p>{this.props.details.location.distance}m</p>
        <p>{this.props.details.categories[0].name}</p>
      </div>
    );
  }
}
export default InfoBox;
