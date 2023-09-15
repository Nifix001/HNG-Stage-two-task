import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/Icon.png'
import Card from './Card'

const Featured = () => {
  return (
    <React.Fragment>
      <div>
        <h2>Featured Movie</h2>
        <Link>See Link <img src={icon} alt="icon" /></Link>
      </div>
      <div>
        <Card data-testid='movie-card' />
      </div>
    </React.Fragment>
  )
}

export default Featured
