import React from 'react'
import { ExampleCards } from '~/components/examplecards';
import { useSession } from 'next-auth/react';
import LandingPage from '~/components/landing';
import Topnav from '~/components/topnav';



const index = () => {
  const { data: session, status } = useSession();

  let landing = (
    <div className='landingPage'></div>
  ) 
  let app = (
    <div className='appPage'></div>
  )

  if (!session) {
    landing = (
      <LandingPage />
    )
  }

  if (session) {
    app = (
      <ExampleCards />
    )
  }





  return (

    <div>
      <Topnav />
      {landing}
      {app}
      
      {/* <ExampleCards /> */}

    </div>


  )
}

export default index