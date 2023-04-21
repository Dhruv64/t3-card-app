import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group, rem, } from '@mantine/core';

// Icons Import
import { ImSoundcloud } from "react-icons/im";
import { SlCalender, } from "react-icons/sl";
import { MdOutlineNotes } from "react-icons/md";
import { SiZelle, SiPatreon, SiApplemusic } from "react-icons/si"
import { IoLogoVenmo, IoLogoXing } from "react-icons/io5";
import { BsYelp, BsSignal, BsPlaystation, BsXbox, BsDribbble, BsBehance, BsPinterest, BsVimeo, BsLine, BsSpotify, } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { BrandInstagram, BrandLinkedin, BrandTwitter, BrandWhatsapp, BrandYoutube, BrandFacebook, BrandGithub, Link, Mail, MapPin, Phone, FileDescription, BrandSnapchat, BrandTiktok, BrandPaypal, BrandCashapp, CalendarEvent, BrandDiscord, BrandTwitch, BrandTelegram, BrandSkype, BrandWechat, DeviceNintendo } from 'tabler-icons-react';


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

    // { title: 'Snapchat', icon: BrandSnapchat, color: 'pink' },
    // { title: 'Tiktok', icon: BrandTiktok, color: 'pink' },
    // { title: 'PDF', icon: FileDescription, color: 'red' },


    // { title: 'Yelp', icon: BsYelp, color: 'pink' },
    // { title: 'Venmo', icon: IoLogoVenmo, color: 'pink' },
    // { title: 'Paypal', icon: BrandPaypal, color: 'pink' },

    // { title: 'CashApp', icon: BrandCashapp, color: 'pink' },
    // { title: 'Calendly', icon: CalendarEvent, color: 'pink' },
    // { title: 'Discord', icon: BrandDiscord, color: 'pink' },

    // { title: 'Twitch', icon: BrandTwitch, color: 'pink' },
    // { title: 'Telegram', icon: BrandTelegram, color: 'pink' },
    // { title: 'Zelle', icon: SiZelle, color: 'pink' },

    // { title: 'Skype', icon: BrandSkype, color: 'pink' },
    // { title: 'Wechat', icon: BrandWechat, color: 'pink' },
    // { title: 'Signal', icon: BsSignal, color: 'pink' },

    // { title: 'Nintendo Switch', icon: DeviceNintendo, color: 'pink' },
    // { title: 'PSN', icon: BsPlaystation, color: 'pink' },
    // { title: 'Xbox Live', icon: BsXbox, color: 'pink' },

    // { title: 'Xing', icon: IoLogoXing, color: 'pink' },
    // { title: 'Dribbble', icon: BsDribbble, color: 'pink' },
    // { title: 'Behance', icon: BsBehance, color: 'pink' },

    // { title: 'Pinterest', icon: BsPinterest, color: 'pink' },
    // { title: 'Patreon', icon: SiPatreon, color: 'pink' },
    // { title: 'Vimeo', icon: BsVimeo, color: 'pink' },

    // { title: 'Line', icon: BsLine, color: 'pink' },
    // { title: 'Date', icon: SlCalender, color: 'pink' },
    // { title: 'Note', icon: MdOutlineNotes, color: 'pink' },

    // { title: 'AppleMusic', icon: SiApplemusic, color: 'pink' },
    // { title: 'Spotify', icon: BsSpotify, color: 'pink' },
    // { title: 'Soundcloud', icon: ImSoundcloud, color: 'pink' },



];

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

const handleClick = () => {
    console.log("button is working")
    
}

export default function Selectors() {
    const { classes, theme } = useStyles();

    const items = mockdata.map((item) => (
        <UnstyledButton onClick={() => handleClick()} key={item.title} className={classes.item}>
            <item.icon color={theme.colors[item.color][6]} size="2rem" />
            <Text size="xs" mt={7}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));

    return (
        <div className='w-1/4'><Card withBorder radius="md" className={classes.card}>
            <Group position="apart">
                <Text className={classes.title}>Add fields</Text>

            </Group>
            <SimpleGrid cols={3} mt="md">
                {items}
            </SimpleGrid>
        </Card></div>
    );
}