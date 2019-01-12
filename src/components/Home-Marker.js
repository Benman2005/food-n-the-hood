import React, {
  PureComponent
} from 'react'
import home from '../images/home.png'


class HomeMarker extends PureComponent {
  render() {
    console.log(this.props)
    return (

      <img src={home} alt='home' />
      )
  }
}

export default HomeMarker