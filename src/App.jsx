import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testmional from './components/Testmional'
import Footer from './components/Footer'


const App = () => {
  return (
   <>
  <Navbar/>
  <div className='max-w-7xl mx-auto pt-20 px-6'>
  <HeroSection/>
  <FeatureSection/>
  <Workflow/>
  <Pricing/>
  <Testmional/>
  <Footer/>
  </div>
  
   </>
  )
}

export default App