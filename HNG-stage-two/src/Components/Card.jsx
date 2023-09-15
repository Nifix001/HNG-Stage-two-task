import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/Icon 1.png'

const Card = ({film}) => {

  const card = film.map((e) =>(
    <React.Fragment>
    <div>
        <Link to={`/i/movies/${e.id}`}>
        <div>
            <div>
                <img src={icon} alt="icon" />
                <img data-testid='movie-poster' src= {`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="movie-poster" />
            </div>
            <p data-testid='movie-release-date' >{e.release_date}</p>
            <h2 data-testid='movie-title'>{e.title}</h2>
            <span>{e.vote_average}</span>
            <p>Adventure</p>
        </div>
        </Link>
    </div>
</React.Fragment>
  )
  )
  return (card)
}

export default Card
