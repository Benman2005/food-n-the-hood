import React, {
  PureComponent
} from 'react'
import marker from '../images/marker.png'

class Marker extends PureComponent {
  render() {
    return (

      <img src={marker} alt = "marker" title={this.props.name} />
    )
  }
}

export default Marker