import React, { PureComponent } from "react";
// import ReactFitText from "react-fittext";

class InfoBox extends PureComponent {
  componentDidMount(){
    console.log(document.getElementById('infoBox').clientWidth)
  }
  render() {
    const style = {
      backgroundColor: "rgb(230, 235, 244)",
      border: "1px solid #212f9e",
      borderRadius: "5px",
      color: "#212f9e",
      width: "150px",
      marginTop: "102%",
      marginLeft: "100%",
      overflowWrap: "break-word",
    };
    const paragraphStyle = {
      margin: "1px 10px 1px 10px",
      // fontSize: "1.8vmax",
      fontFamily: "'Montserrat', sans-serif"
    };
    return (
      <div id="infoBox"style={style}>
        {/* <ReactFitText> */}
          <p style={paragraphStyle}>{this.props.details.name}</p>
        {/* </ReactFitText> */}
        {this.props.details.location.distance && (
            <p style={paragraphStyle}> ({this.props.details.location.distance}m)</p>
        )}
          <p style={paragraphStyle}>{this.props.details.categories[0].name}</p>
      </div>
    );
  }
}
export default InfoBox;
