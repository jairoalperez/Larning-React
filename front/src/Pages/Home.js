import React from 'react'
import UserLogin from '../Components/UserLogin'
import Clicker from '../Components/Clicker'

function Home() {
  return (
    <div className='container mt-5 text-center'>
      <h1 className='fs-1'>
        CLICKER
        <Clicker/>
      </h1>
    </div>
  )
}

export default Home