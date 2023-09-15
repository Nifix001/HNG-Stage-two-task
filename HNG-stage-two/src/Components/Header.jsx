import React from 'react'
import logo from '../assets/Logo.png'
import menu from '../assets/Menu.png'
import play from '../assets/Play.png'

const Header = () => {
  return (
    <React.Fragment>
        <div>
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                <input type="text" placeholder='What do you want to watch?' />
                </div>
                <div>
                    <h4>Sign In</h4>
                    <img src={menu} alt="menu" />
                </div>
            </nav>
            <section>
                <h2></h2>
                <div></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus officiis nobis quam illo odit! Incidunt amet accusamus fuga, dolore minima natus laborum repellendus est voluptatum ipsa nostrum cum non?</p>
                <button><img src={play} alt="play" /> Watch Trailer</button>
            </section>
      </div>
    </React.Fragment>
  )
}

export default Header
