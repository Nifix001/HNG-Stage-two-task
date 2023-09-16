import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='justify-center'>
       <div className="footer grid justify-center my-10 gap-3 ">
            <div className="social-media flex justify-self-center text-4xl gap-5">
            <Link to='https://web.facebook.com' target='_blank'>
             <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </Link>
            <Link to='https://www.instagram.com' target='_blank'>
             <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
            </Link>
            <Link to="https://www.x.com" target='_blank'>
             <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" />
            </Link>
            <Link to="https://www.youtube.com" target='_blank'>
             <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </Link>
                {/* facebook */}
                {/* instagram */}
                {/* twitter */}
                {/* youtube */}
            </div>
            <div className="policies flex gap-4">
                <a href="">Conditions of Use</a>
                <a href="">Privacy & Policy</a>
                <a href="">Press Room</a>
            </div>
        <p id='copyright' className='justify-self-center'>&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
        </div>
    </footer>
  )
}

export default Footer
