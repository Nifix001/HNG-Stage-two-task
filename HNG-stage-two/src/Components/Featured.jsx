import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
// 

const Featured = ({film}) => {
  return (
    <React.Fragment>
      <div id="head" className='flex justify-between xs:mx-5 sm:mx-10 lg:mx-20 xs:my-3 sm:my-5 md:my-10 lg:my-10 items-end'>
                <header className='xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Featured Movies</header>
                <Link className='text-rose-700 lg:-ml-30'>See more</Link>
            </div>
            <div className='grid grid-cols-3 xs:mx-5 sm:mx-10 lg:mx-20 gap-10 '>
                <Card film={film} data-testid='movie-card' />
            </div>
    </React.Fragment>
  )
}

export default Featured
