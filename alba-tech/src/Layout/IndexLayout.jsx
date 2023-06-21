import React from 'react'
import Navbars from '../Components/Navbars'
import Heros from '../Components/Hero'
import Service from '../Components/Service'
import Testimonial from '../Components/testimonial'
import Client from '../Components/client'
import Footers from '../Components/Footer'
import Porto from '../Components/Porto'

const IndexLayout = () => {
  return (
    <>
    <Navbars/>
    <Heros/>
    <Service/>
    <Porto/>
    <Testimonial />
    <Client />
    <Footers/>
    </>
  )
}

export default IndexLayout
