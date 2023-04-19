import React from 'react'
import Header from '~/components/Header';
import { ExampleCards } from '~/components/examplecards';
import { useSession } from 'next-auth/react';
import LandingPage from '~/components/landing';
import Topnav from '~/components/topnav';



const index = () => {
  const { data: session, status } = useSession();

  let landing = (
    <div className='landingPage'>
      {/* <LandingPage /> */}
    </div>
  ) 
  let app = (
    <div className='appPage'>
      {/* <ExampleCards /> */}
    </div>
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
      {landing}
      <Header />
      <Topnav />
      {/* <ExampleCards /> */}

    </div>


  )
}

export default index