import React, { PureComponent } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import HomeMarker from './Home-Marker'

class GoogleMap extends PureComponent {
  // static defaultProps = {
  //   center: {
  //     lat: 52.35,
  //     lng:  4.91,
  //   },
  //   zoom: 13
  // };

  renderMarker = venue => {
    return (
      <Marker
        key={venue.id}
        lat={venue.location.lat}
        lng={venue.location.lng}
        details={venue}
      />
    );
  };
  render() {
    console.log(this.props);
    return (
      <div id="googleMap" style={{ height: "30vw", width: "40vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCoPhuanwcuptxhdtQNL7Xn0Osr8uqq-zM" }}
          center={{ lat: this.props.lat, lng: this.props.lng }}
          defaultZoom={13}
        >
          {this.props.venues &&
            this.props.venues.map(venue => this.renderMarker(venue))}
          <HomeMarker lat={this.props.lat} lng={this.props.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}
export default GoogleMap;
//api key = AIzaSyCoPhuanwcuptxhdtQNL7Xn0Osr8uqq-zM
