import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/Icon 1.png'

const Card = () => {
  return (
    <React.Fragment>
        <div>
            <Link>
            <div>
                <div>
                    <img src={icon} alt="icon" />
                    <img data-testid='movie-poster' src="" alt="movie-poster" />
                </div>
                <p data-testid='movie-release-date' >USA, 2023</p>
                <h2 data-testid='movie-title'>Title</h2>
                <span>rating</span>
                <p>Adventure</p>
            </div>
            </Link>
        </div>
    </React.Fragment>
  )
}

export default Card
