import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { api } from '~/utils/api';
import {message} from "antd"
// import Link as nextLink from 'next/link';
// Selectors Import
import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group, rem, } from '@mantine/core';
import { CgWebsite } from "react-icons/cg";
import { BrandInstagram, BrandLinkedin, BrandTwitter, BrandWhatsapp, BrandYoutube, BrandFacebook, BrandGithub, Mail, Link, MapPin, Phone, FileDescription, BrandSnapchat, BrandTiktok, BrandPaypal, BrandCashapp, CalendarEvent, BrandDiscord, BrandTwitch, BrandTelegram, BrandSkype, BrandWechat, DeviceNintendo } from 'tabler-icons-react';
import { MouseEvent } from 'react';
import { useRouter } from 'next/router';
// Selectors Part-1 Start


const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
    },

    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: theme.radius.md,
        height: rem(90),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease, transform 100ms ease',

        '&:hover': {
            boxShadow: theme.shadows.md,
            transform: 'scale(1.05)',
        },
    },
}));
// Selectors Part-1 END




type FormValues = {
    imgUrl: string
    logoUrl: string
    name: string
    title: string
    department: string
    company: string
    phone: string
    email: string
    address: string
    websitelink: string
    link: string
    github: string
    twitter: string
    instagram: string
    linkedin: string
    facebook: string
    youtube: string
    whatsapp: string
}


const New = () => {
    const router = useRouter()
    const { mutate } = api.cards.createCard.useMutation();
    const form = useForm<FormValues>()
    const { register, control, handleSubmit, formState } = form;
    // const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    //     control, // control props comes from useForm (optional: if you are using FormContext)
    //     name: "fields", // unique name for your Field Array
    //   });

    const { errors } = formState;
    // const removeEmptyFields = (data: FormValues) => {
    //     Object.keys(data).forEach(key => {
    //         if (data[key] === '' || data[key] == null) {
    //             delete data[key];
    //         }
    //     });
    // }

    const onSubmit = (data: FormValues) => {
        // removeEmptyFields(data);
        // message.info('Creating Card');
        mutate(data)
        message.success('Card Created!')
        
        {(() => {
            router.push(`/app/`)
        })()}
        console.log('Form Submitted', data)
        

    }

    // image handle function
    const [image, setImage] = useState('')
    const handleImage = (e: any) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }


    const [addPhone, setAddPhone] = useState(false)
    const [addEmail, setAddEmail] = useState(false)
    const [addAddress, setAddAddress] = useState(false)
    const [addWebsite, setAddWebsite] = useState(false)
    const [addLink, setAddLink] = useState(false)
    const [addGithub, setAddGithub] = useState(false)
    const [addTwitter, setAddTwitter] = useState(false)
    const [addInstagram, setAddInstagram] = useState(false)
    const [addLinkedIn, setAddLinkedIn] = useState(false)
    const [addFacebook, setAddFacebook] = useState(false)
    const [addYoutube, setAddYoutube] = useState(false)
    const [addWhatsapp, setAddWhatsapp] = useState(false)

    const mockdata = [
        { title: 'Phone', icon: Phone, color: 'violet' },
        { title: 'Email', icon: Mail, color: 'orange' },
        { title: 'Address', icon: MapPin, color: 'blue' },
        { title: 'Website', icon: CgWebsite, color: 'yellow' },
        { title: 'Link', icon: Link, color: 'green' },
        { title: 'Github', icon: BrandGithub, color: 'pink' },
        { title: 'Twitter', icon: BrandTwitter, color: 'blue' },
        { title: 'Instagram', icon: BrandInstagram, color: 'pink' },
        { title: 'LinkedIn', icon: BrandLinkedin, color: 'blue' },
        { title: 'Facebook', icon: BrandFacebook, color: 'blue' },
        { title: 'Youtube', icon: BrandYoutube, color: 'red' },
        { title: 'Whatsapp', icon: BrandWhatsapp, color: 'green' },
    ];



    const handleClick = (param: String) => {
        if (param == 'Phone') {
            { (() => setAddPhone(!addPhone))() }
        } if (param == 'Email') {
            { (() => setAddEmail(!addEmail))() }
        } if (param == 'Address') {
            { (() => setAddAddress(!addAddress))() }
        } if (param == 'Website') {
            { (() => setAddWebsite(!addWebsite))() }
        } if (param == 'Link') {
            { (() => setAddLink(!addLink))() }
        } if (param == 'Github') {
            { (() => setAddGithub(!addGithub))() }
        } if (param == 'Twitter') {
            { (() => setAddTwitter(!addTwitter))() }
        } if (param == 'Instagram') {
            { (() => setAddInstagram(!addInstagram))() }
        } if (param == 'LinkedIn') {
            { (() => setAddLinkedIn(!addLinkedIn))() }
        } if (param == 'Facebook') {
            { (() => setAddFacebook(!addFacebook))() }
        } if (param == 'Youtube') {
            { (() => setAddYoutube(!addYoutube))() }
        } if (param == 'Whatsapp') {
            { (() => setAddWhatsapp(!addWhatsapp))() }
        }
    }


    // Selectors Part-2 START
    const { classes, theme } = useStyles();

    const items = mockdata.map((item) => (
        <UnstyledButton key={item.title} onClick={() => handleClick(item.title)} className={classes.item}>
            <item.icon color={theme.colors[item.color][6]} size="2rem" />
            <Text size="xs" mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));
    // Selectors Part-2 END

    return (

        <div >
            <div className='my-5'>
                <div className=' px-3'>
                    <a href='/app/'><button className='bg-blue-500 hover:bg-blue-400 text-white rounded-full font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 '><IoArrowBack size={30} /></button></a>
                    <label className="text-gray-500 font-bold pl-5">
                        Cards Details
                    </label>
                </div>

            </div>
            <div className='flex '>
                <div className='text-center p-8 w-1/3' >
                    <div className='border border-solid p-5 rounded mx-10'>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div>
                                <div >
                                    <label className='font-bold flex mb-3' htmlFor="company">Image URL</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="company" {...register("imgUrl")} />

                                </div>
                                <div >
                                    <label className='font-bold flex mb-3' htmlFor="company">Logo URL</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="company" {...register("logoUrl")} />

                                </div>
                                <div className=''>
                                    <label className='font-bold flex mb-3' htmlFor="firstname">Name</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="name" {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }

                                    })} />
                                    <p className='text-red-600 text-[12px] text-left'>{errors.name?.message}</p>
                                </div>

                                {/* <div>
                                <label className='font-bold flex mb-3' htmlFor="middlename">Middle Name</label>
                                <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="middlename" {...register("middlename")} />
                            </div> */}

                                {/* <div className=''>
                                <label className='font-bold flex mb-3' htmlFor="lastname">Last Name</label>
                                <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="lastname" {...register("lastname", {
                                    required: "Last Name is required"
                                })} />
                                <p className='text-red-600 text-[12px] text-left'>{errors.lastname?.message}</p>
                            </div> */}
                                <div className='flex-col'>
                                    <label className='font-bold flex mb-3' htmlFor="title">Title</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded resize-none' id="title" {...register("title")} />

                                </div>
                                {/* <div>
                                <label className='font-bold flex mb-3' htmlFor="department">Department</label>
                                <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="department" {...register("department")} />

                            </div> */}
                                <div >
                                    <label className='font-bold flex mb-3' htmlFor="company">Company</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="company" {...register("company")} />

                                </div>

                                {/* Fields */}

                                <div className={`${addPhone ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="phone">Phone</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="phone" {...register("phone")} />

                                </div>
                                <div className={`${addEmail ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="email">Email</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="email" id="email" {...register("email")} />

                                </div>
                                <div className={`${addAddress ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="address">Address</label>
                                    <textarea className='block w-auto py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded resize-none' type="text" id="address" {...register("address")} />

                                </div>
                                <div className={`${addWebsite ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="websitelink">Website</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="websitelink" {...register("websitelink")} />

                                </div>
                                <div className={`${addLink ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="link">Link</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="link" {...register("link")} />

                                </div>
                                <div className={`${addGithub ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="github">Github</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="github" {...register("github")} />

                                </div>
                                <div className={`${addTwitter ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="twitter">Twitter</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="twitter" {...register("twitter")} />

                                </div>
                                <div className={`${addInstagram ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="instagram">Instagram</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="instagram" {...register("instagram")} />

                                </div>
                                <div className={`${addLinkedIn ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="linkedlink">LinkedIn</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="linkedlink" {...register("linkedin")} />

                                </div>
                                <div className={`${addFacebook ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="facebook">Facebook</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="facebook" {...register("facebook")} />

                                </div>
                                <div className={`${addYoutube ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="youtube">Youtube</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="youtube" {...register("youtube")} />

                                </div>
                                <div className={`${addWhatsapp ? 'block' : 'hidden'}`} >
                                    <label className='font-bold flex mb-3' htmlFor="whatsapp">Whatsapp</label>
                                    <input className='block w-[80%] py-1.5 px-3 text-sm leading-snug border border-x border-solid rounded' type="text" id="whatsapp" {...register("whatsapp")} />

                                </div>

                            </div>


                            <div className='py-3'>
                                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* <DevTool control={control} /> */}
                </div >

                {/* Selectors Part-3 START */}

                <div className='w-1/4'>
                    <Card withBorder radius="md" className={classes.card}>
                        <Group position="apart">
                            <Text className={classes.title}>Add fields</Text>
                        </Group>
                        <SimpleGrid cols={3} mt="md">
                            {items}
                        </SimpleGrid>
                    </Card>
                </div>
                {/* Selectors Part-3 START */}

            </div >
        </div>
    )
}

export default New
