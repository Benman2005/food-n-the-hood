import React, {
  PureComponent
} from 'react'
import marker from '../images/marker.png'

class Marker extends PureComponent {
  render() {
    return (

      <img src={marker} alt = "marker" />
    )
  }
}

export default Marker