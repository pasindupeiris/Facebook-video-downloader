import React from 'react'
import Video from './Video'
import Navigation from '../components/Navigation'
import Howto from '../pages/Howto';
import Fotter from './Fotter';
const Down = () => {
  return (
    <div>
      <Navigation />
      <Video />
      <Howto />
      <Fotter/>
    </div>
  )
}

export default Down