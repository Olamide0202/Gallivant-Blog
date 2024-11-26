import React from 'react'
import Hero from '../component/Home/Hero/Hero'
import Work from '../component/Home/Hero/Work/Work'
import Test from '../component/Testimony/Test'
import Footer from '../component/Footer/Footer'



export default function Home() {
  return (
    <div className='bg-primary min-h-screen space-y-10'>
      <Hero />
      <Work />
      <Test />
      <Footer /> 
    </div>
  )
}
