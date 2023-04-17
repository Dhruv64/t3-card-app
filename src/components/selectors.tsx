import {
    createStyles,
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    rem,
} from '@mantine/core';

import {
    BrandInstagram,
    BrandLinkedin,
    BrandTwitter,
    BrandWhatsapp,
    BrandYoutube,
    Link,
    Mail,
    MapPin,
    Phone
} from 'tabler-icons-react';

const mockdata = [
    { title: 'Phone', icon: Phone, color: 'violet' },
    { title: 'Email', icon: Mail, color: 'indigo' },
    { title: 'Address', icon: MapPin, color: 'blue' },
    { title: 'Website', icon: Link, color: 'green' },
    { title: 'Twitter', icon: BrandTwitter, color: 'teal' },
    { title: 'Instagram', icon: BrandInstagram, color: 'cyan' },
    { title: 'Youtube', icon: BrandYoutube, color: 'pink' },
    { title: 'LinkedIn', icon: BrandLinkedin, color: 'red' },
    { title: 'Whatsapp', icon: BrandWhatsapp, color: 'orange' },
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

export default function Selectors() {
    const { classes, theme } = useStyles();

    const items = mockdata.map((item) => (
        <UnstyledButton key={item.title} className={classes.item}>
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