import React, { PureComponent } from "react";
import InputForm from "./InputForm";
import GoogleMap from "./GoogleMap";

class LandingPage extends PureComponent {
  state = {
    venues: null,
    error: null,
    latitude: 52.3475081,
    longitude: 4.9088069999999995,
    coordinates: "",
    city: "",
    query: ""
  };

  // passed as a prop to the inputForm component this function takes that state, inserts into local state, checks if input has location(city), else uses getCoordinates function to get geocoordinates and search based on those.
  onSubmit = async data => {
    const { city, query } = data;
    await this.setState({ city, query });
    if (city) {
      this.setState({ coordinates: "" });
      this.searchVenues();
    } else {
      this.getCoordinates();
    }
  };

  // if no location is filled in, we use this function to auto-detect geolocation and search based on coordinates
  getCoordinates = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude.toFixed(2);
        const longitude = position.coords.longitude.toFixed(2);
        this.setState({
          coordinates: "&ll=" + latitude + "," + longitude, // '&ll=' stands for 'latitude longitude' and is prepended because it's needed for search (query) by coordinates
          city: "",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        this.searchVenues();
      });
    } else {
      this.setState({
        error: "sorry, you don't have geolocation enabled. Please enter a city."
      });
    }
  };

  //this is the api request, and translates input values to queries. Resulting errors/venues are put in state to be rendered later.
  searchVenues = () => {
    let url =
      "https://api.foursquare.com/v2/venues/search?intent=browse&radius=5000&limit=50&categoryId=4d4b7105d754a06374d81259&client_id=4KZREOGTJ1VVJW0SCTXDZSLKHZTPNI3GMGLIC01OEH1J45EY&client_secret=WIMBRXLP5SG2OMZN5YZTBGAGTCYFQKHDTCGAADSIG4SZCTWW&v=20180715";
    let { city, query, coordinates } = this.state;
    if (city) {
      city = "&near=" + city;
    }
    if (query) {
      query = "&query=" + query;
    }
    fetch(`${url}${city}${coordinates}${query}`, { method: "GET" })
      .then(res => res.json())
      .then(result => {
        if (result.meta.code === 200) {
          this.setState({ venues: result.response.venues, error: null });
        } else {
          this.setState({
            error: result.meta.errorType + ": " + result.meta.errorDetail,
            venues: []
          });
        }
      })
      .catch(error => console.log(error));
  };

  //this function renders the response array of venues, their name, distance, and location. note: distance is only rendered when exact geocoordinates are passed.
  renderVenue = venue => {
    return (
      <div key={venue.id} className="singleResult">
        <h3 className="venueName">
          {venue.name}{" "}
          {venue.location.distance &&
            "(" +
              (Math.round(venue.location.distance) / 1000).toFixed(1) +
              "km)"}
        </h3>
        <div className="venueLocation">
          {venue.location.formattedAddress.map(address => {
            return <p key={address}>{address}</p>;
          })}
        </div>
      </div>
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1 id="title">FOOD 'N THE HOOD</h1>
        <h4 id="subtitle">Discover food.. in your hood!</h4>
        <InputForm onSubmit={this.onSubmit} />
        
        <GoogleMap venues={this.state.venues} lat={this.state.latitude} lng={this.state.longitude}/>
        
        <div id="resultsContainer">
          <div id="results">
            {/* render error if one is present */}
            {this.state.error && <p> Error : {this.state.error}</p>}

            {/* if request and response are fine, but there are no results */}
            {this.state.venues && this.state.venues.length < 1 && (
              <p>no results in this area :(</p>
            )}
            {/* this renders the results through the renderVenues function, sorted by closest distance */}
            {this.state.venues &&
              this.state.venues
                .sort((a, b) => {
                  return a.location.distance - b.location.distance;
                })
                .map(venue => this.renderVenue(venue))}
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
