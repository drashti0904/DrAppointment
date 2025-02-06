import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const home = () => {
  return (
    <div>
      {/* The 'Header' component is rendered (display)inside a 'div' */}
    <Header />
    <SpecialityMenu />
    <TopDoctors />
    <Banner />
    </div>
  )
}

export default home
