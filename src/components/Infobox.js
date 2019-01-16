import React, { PureComponent } from "react";

class InfoBox extends PureComponent {
  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      borderRadius: '5px',
      color: "blue",
      width: "90px",
      marginTop: '102%',
      marginLeft: '100%',
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
