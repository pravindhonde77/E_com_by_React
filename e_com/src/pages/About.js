import React, { useContext } from 'react'

import HeroSection from '../components/HeroSection'
import { AppContext } from '../contex/Productcontex'

const About = () => {

  const {myName} = useContext(AppContext)

  const data = {
    name: "Ecom store",
  }
  return (
    <>
    {myName}
      <HeroSection myData={data} />
    </>
  )
}

export default About