import React, { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import menu from '../assets/Menu.png'
import play from '../assets/Play.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Header = ({film}) => {
  
  const [randomImage, setRandomImage] =useState(null);

  useEffect(() => {
    if (!randomImage && film && film.length > 0) {
        const fetchRandomImageWithOverview = async () => {
            try{
              const movieBackdrops = await film.map(movie => ({
                backdropUrl: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
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
        <div className='h-screen w-full bg-cover bg-center text-white px-20 py-10' style={{backgroundImage:`url(${randomImage?.backdropUrl})`}}>
            <nav className='flex justify-between'>
                <div>
                    <img className='mt-2' src={logo} alt="" />
                </div>
                <div className='mt-4'>
                <input className='w-96 bg-transparent border border-white rounded-md placeholder:text-white px-1 py-1' type="text" placeholder='What do you want to watch?' />
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='absolute -ml-5 mt-2'/>
                </div>
                <div className='flex gap-8 mt-4'>
                    <h4 className='text-center'>Sign In</h4>
                    <img className='-mt-1 w-9 h-9' src={menu} alt="menu" />
                </div>
            </nav>
            <section className='xs:64 sm:w-72 md:w-80 lg:w-96 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-20'>
                <h2 className='text-5xl font-bold'>{randomImage?.title}</h2>
                <div>
                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ffffff",}} className='mr-1 lg:my-2' />
                        <p id="ratings">{randomImage?.ratings}</p> 
                  </div>
                <p className='text-base font-medium'>{randomImage?.overview}</p>
                <Link to='{`/i/movies/${randomImageInfo?.id}`}'>
                <button className='rounded-md w-40 p-1 flex gap-2 items-center bg-rose-700 mt-3'><img className='item-center ml-2' src={play} alt="play" />Watch Trailer</button>
                </Link>
            </section>
      </div>
    </React.Fragment>
  )
}

export default Header

