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
  title: 'card title',
  description: '',
  logo: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
  color: 'bg-red-200',
  fields: [
    { title: 'Email', description: 'hello@mantine.dev', icon: At },
    { title: 'Phone', description: '+49 (800) 335 35 35', icon: Phone },
    { title: 'Address', description: '844 Morris Park avenue', icon: MapPin },
    { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: Sun },
  ],

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
          <BadgeCard image={userinfo.image} title={userinfo.title} logo={userinfo.logo} description={userinfo.description} color={userinfo.color} fields={userinfo.fields} name={null} />
          <Details />
          <Selectors />
          <div>

          </div>

        </div>
      </ClientOnly>
    </>
  )
}