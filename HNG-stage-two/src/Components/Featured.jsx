import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Featured = ({film}) => {
  return (
    <React.Fragment>
      <div>
        <h2>Featured Movie</h2>
        <Link>See Link <FontAwesomeIcon icon="fa-light fa-heart" /></Link>
      </div>
      <div>
        <Card film={film} data-testid='movie-card' />
      </div>
    </React.Fragment>
  )
}

export default Featured
