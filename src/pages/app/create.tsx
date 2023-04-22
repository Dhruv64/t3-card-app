'use client'

import BadgeCard from "~/components/card"
import NewCard from "~/components/new-card"
import Selectors from "~/components/selectors"
import { useState } from "react"
import { At, MapPin, Phone, Sun } from 'tabler-icons-react'
import Header from "~/components/Header"
import ClientOnly from "~/components/client-only"
import Details from "~/components/details"
import Topnav from "~/components/topnav"


const userinfo = {
  image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
  title: 'intern',
  company: 'mamo llp',
  logo: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
  color: 'bg-red-200'
}



export default function Home() {


  return (
    <>
      <ClientOnly>
        <div className="flex">
          {/* <h1 className="text-3xl font-bold underline flex-grow">
          Hello world!
        </h1> */}

          <Header />
          <Topnav />
        </div>
        <div className="flex space-x-10 ml-10">
          {/* <NewCard/> */}
          <BadgeCard image={userinfo.image} title={userinfo.title} logo={userinfo.logo} company={userinfo.company} color={userinfo.color} name={'dhruv'} phone={null} email={'dhruv.p8601@gmail.com'} address={'vadodara'} websitelink={'youtube.com'} link={''} github={'git'} twitter={'tweet'} instagram={'insta'} linkedin={'whatever'} facebook={'face'} youtube={'yt'} whatsapp={'9979879311'}  />
          <Details />
          <Selectors />
          <div>

          </div>

        </div>
      </ClientOnly>
    </>
  )
}