import React from 'react'
import Header from './Component/Header'
import Card from './Component/Card'

const home = () => {
  return (
    <div suppressHydrationWarning={true} className='background flex flex-col gap-4'> 
    <Header />
    <div className='container'>
      <div className='grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8' >
        <Card/>

      </div>
    </div>
    </div>
  )
}

export default home