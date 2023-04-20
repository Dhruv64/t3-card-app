import React from 'react'
import { useSession } from 'next-auth/react';
import Topnav from '~/components/topnav';
import Head from 'next/head';
import { api } from "~/utils/api";
import NotFound404 from "~/components/404";
import { createStyles, SimpleGrid, Card, Image, Text, Container } from '@mantine/core';


const index = () => {
  const { data } = api.cards.getCardsByUserId.useQuery()
  console.log(data)
  const { data: session } = useSession();

  if (!session) {
    setTimeout(() => { return <NotFound404 /> }, 2000)
  }


  const useStyles = createStyles((theme) => ({
    card: {
      transition: 'transform 150ms ease, box-shadow 150ms ease',
      boxShadow: theme.shadows.md,
      height: 220,
      width: 200,
      '&:hover': {
        transform: 'scale(1.04)',
        boxShadow: theme.shadows.md,

      },
    },
    createCard: {
      transition: 'transform 150ms ease, box-shadow 150ms ease',
      boxShadow: theme.shadows.md,
      height: 220,
      width: 200,
      '&:hover': {
        transform: 'scale(1.04)',
        boxShadow: theme.shadows.md,

      },
      backgroundColor: '#e1e9f5'
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 500,
    },
  }));

  const { classes } = useStyles();

  const cards = data?.map((item) => (

    <>
      <Head>
        <title>
          Your Cards
        </title>
      </Head>
      <Card key={item.name} p={'xs'} radius="md" component="a" href={`app/share/${item.id}`} className={classes.card} >

        <Image src={item.imgUrl} width={200} height={180} />
        {/* <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {item.date}
      </Text> */}
        <Text className={classes.title} mt={5}>
          {item.name}
        </Text>

      </Card>
    </>
  ));

  return (

    <div>
      <Topnav />

      {(() => {
        if (!session) {
          return null
        } else return (
          <Container py="xl">
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <Card p={'xs'} radius="md" component="a" href='/app/create' className={`border-dashed border ${classes.createCard}`} >
              <div>
                <span className='text-77xl font-thin mx-14'>+</span><br></br>
                <span className='font-[350] mx-10'>Create a card</span>
              </div>
            </Card>
            {cards}
          </SimpleGrid>
        </Container>
  
        )
      })()}
     
    </div>
  )
}

export default index
