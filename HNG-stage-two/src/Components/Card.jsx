import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/Icon 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({film}) => {

  const card = film.map((e) => (
    <div className=''>
    <Link to={`/i/movies/${e.id}`}>
      <div>
      <div>
          <span id="movie-type"></span>
          <span id="like-button"></span>
      </div>
      <img src= {`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="poster image" className='w-80' data-testid="movie-poster" />
      </div>
    <div className='description xs:w-32 sm:w-36 md:w-64 lg:w-80 mt-3 gap-1'>
      <p className='movie-title xs:text-md sm:text-lg md:text-xl lg:text-2xl font-bold' data-testid='movie-title'>{e.title}</p>
      <span id='production-details' className='text-md text-gray-400' data-testid='movie-release-date' >release date: {e.release_date}</span>
      <div className='movie-ratings gap-1 flex items-center'>
        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#fdd43f",}} />
        {e.vote_average}
      </div>
      <span id='movie-genre'></span>
      </div>
    </Link>
  </div>
  )
  )
  return (card)
}

export default Card
