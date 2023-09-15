import React from 'react'
import Featured from '../Components/Featured'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Homepage = ({film}) => {
  return (
    <React.Fragment>
        <Header film={film}/>
        <Featured film={film}/>
        <Footer />
    </React.Fragment>
  )
}

export default Homepage
