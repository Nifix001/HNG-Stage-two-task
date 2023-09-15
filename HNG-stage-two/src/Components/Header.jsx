import React, { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import menu from '../assets/Menu.png'
import play from '../assets/Play.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({film}) => {
  
  const [randomImage, setRandomImage] =useState(null)

  useEffect(() => {
    if (!randomImage && film && film.length > 0) {
        const fetchRandomImageWithOverview = async () => {
            try{
              const movieBackdrops = await film.map(movie => ({
                backdropUrl: `https://image.tmdb.org/t/p/original${film.backdrop_path}`,
                overview: movie.overview,
                title: movie.original_title,
                id: movie.id
              }));
        
              // Choose a random movie backdrop
              
              if (movieBackdrops.length === 0) {
                  console.error('No movie backdrops available.');
                  return;
                }
                
            const randomBackdropInfo = movieBackdrops[Math.floor(Math.random() * movieBackdrops.length)];


              console.log('Random backdrop info:', randomBackdropInfo);

              if (movieBackdrops.length === 0) {
                console.error('No movie backdrops available.');
                return;
            }
        
            // Update state with the random image and its metadata
            setRandomImage(randomBackdropInfo);
          } catch (error) {
            console.error('Error fetching TMDb data:', error);
          }
        }
      
        fetchRandomImageWithOverview();
  }
}, [film, randomImage]); 

  return (
    <React.Fragment>
        <div>
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                <input type="text" placeholder='What do you want to watch?' />
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
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
