import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/Icon.png'

const Featured = () => {
  return (
    <React.Fragment>
      <div>
        <h2>Featured Movie</h2>
        <Link>See Link <img src={icon} alt="" /> </Link>
      </div>
        
    </React.Fragment>
  )
}

export default Featured
