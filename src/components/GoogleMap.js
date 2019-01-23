import React, { PureComponent } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import HomeMarker from "./Home-Marker";

class GoogleMap extends PureComponent {
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
    return (
      <div id="googleMap" style={{ height: "40vh", width: "100vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCoPhuanwcuptxhdtQNL7Xn0Osr8uqq-zM" }}
          center={{ lat: this.props.lat, lng: this.props.lng }}
          defaultZoom={13}
          hoverDistance={10}
        >
          <HomeMarker lat={this.props.lat} lng={this.props.lng} />
          {this.props.venues &&
            this.props.venues.map(venue => this.renderMarker(venue))}
        </GoogleMapReact>
      </div>
    );
  }
}
export default GoogleMap;
//api key = AIzaSyCoPhuanwcuptxhdtQNL7Xn0Osr8uqq-zM
