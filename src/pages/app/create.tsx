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
import Form from "~/components/form"

const userinfo = {
  image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
  title: 'card title',
  description: '',
  logo: 'https://cdn.logo.com/hotlink-ok/logo-social.png',
  color: 'bg-red-200',
  fields: [
    { type: 'Email', entry: 'hello@mantine.dev', icon:'at' },
    { type: 'Phone', entry: '+49 (800) 335 35 35', icon: 'phone' },
    { type: 'Address', entry: '844 Morris Park avenue', icon: 'map-pin' },
    { type: 'Working hours', entry: '8 a.m. - 11 p.m.', icon: 'phone'},
  ],

}



export default function Home() {
  console.log(userinfo.fields)

  return (
    <>
      <ClientOnly>
        <div className="flex">
          {/* <h1 className="text-3xl font-bold underline flex-grow">
          Hello world!
        </h1> */}

          <Topnav />
          {/* <Header /> */}
        </div>
        <div className="flex space-x-10 ml-10">
          {/* <NewCard/> */}
          <BadgeCard image={userinfo.image} title={userinfo.title} logo={userinfo.logo} description={userinfo.description} color={userinfo.color} fields={userinfo.fields} name={null} />
          
          
          <Selectors />
          <div>

          </div>

        </div>
        {/* <Form /> */}
        <Details />
      </ClientOnly>
    </>
  )
}