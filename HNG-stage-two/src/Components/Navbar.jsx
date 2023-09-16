import React from 'react'
import logo from '../assets/Logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='grid absolute left-0 h-full p-5 md:w-1/5 lg:w-1/6 sm:w-1/5 xs:w-1/4 border-r-2 rounded-7xl xs:text-xs sm:text-xs md:text-sm lg:text-base'>
    <Link className="logo flex w-1/2 items-center" to='/'>
        <img src={logo} alt="logo" className='object-contain mr-3' />
    </Link>
    <div className="options grid">
        <NavLink id='gohome' to='/'>
            {/* home */}
            <FontAwesomeIcon icon="fa-solid fa-house" className='mr-2' />
            Home
        </NavLink>
        <NavLink id='movies'>
            {/* movies */}
            <FontAwesomeIcon icon="fa-solid fa-video" className='mr-2' />
            Movies
        </NavLink>
        <NavLink id='series'>
            {/* tv */}
            <FontAwesomeIcon icon="fa-solid fa-tv" className='mr-2' />
            TV Series
        </NavLink>
        <div id='schedule'>
            {/* calendar */}
            <FontAwesomeIcon icon="fa-regular fa-calendar-days" className='mr-2' />
            Upcoming
        </div>
    </div>
    <div id="advert" className='grid w-2/3 h-full px-2 pb-2 pt-5 border text-xs'>
        <p>Play movie quizes and earn free tickets</p>
        <p>50k people are playing now</p>
<button>Start playing</button>
<div>Start Playing</div>
            </div>
            <div>
                {/* door */}
                <FontAwesomeIcon icon="fa-solid fa-door-open" className='mr-2' />
                Log out
            </div>
        </div>
  )
}

export default Navbar
