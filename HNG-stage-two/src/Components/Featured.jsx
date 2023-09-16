import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Featured = ({film}) => {
  return (
    <React.Fragment>
      <div lassName='flex justify-between xs:mx-5 sm:mx-10 lg:mx-20 xs:my-3 sm:my-5 md:my-10 lg:my-10 items-end'>
        <h2>Featured Movie</h2>
        <Link>See Link <FontAwesomeIcon icon="fa-light fa-heart" /></Link>
      </div>
      <div className='grid grid-cols-3 xs:mx-5 sm:mx-10 lg:mx-20 gap-10 '>
        <Card film={film} data-testid='movie-card' />
      </div>
    </React.Fragment>
  )
}

export default Featured
