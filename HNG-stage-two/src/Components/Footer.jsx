import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <React.Fragment>
      <div>
        <div>
        <Link><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></Link>
          <Link><FontAwesomeIcon icon="fa-brands fa-instagram" /></Link>
          <Link><FontAwesomeIcon icon="fa-brands fa-twitter" /></Link>
          <Link><FontAwesomeIcon icon="fa-brands fa-youtube" /></Link>
        </div>
        <div>
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
          <p>&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
      </div>
    </React.Fragment>
  )
}

export default Footer
