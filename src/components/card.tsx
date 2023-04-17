import { Heart } from 'tabler-icons-react';
import FieldList from "~/components/fields"
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    ActionIcon,
    createStyles,
    rem,
    CardSection,
} from '@mantine/core';
import { type } from 'os';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    section: {
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },

    like: {
        color: theme.colors.red[6],
    },

    label: {
        textTransform: 'uppercase',
        fontSize: theme.fontSizes.xs,
        fontWeight: 700,
    },
}));

interface BadgeCardProps {
    image: string | null;
    name: string | null;
    title: string | null;
    logo: string | null;
    description: string | null;
    color: string | null;
    fields: {
        type: string;
        link: string | null;
        entry: string;
        // icon: React.FC<any>;
    }[];
}

export default function BadgeCard({ image, name, title, description, logo, fields, color }: BadgeCardProps) {
    const { classes, theme } = useStyles();
    // console.log('this is the type of the image' + image)

    return (
        <>
            <div className='w-full md:w-2/3 lg:w-1/3'>
                <Card withBorder radius="md" p="md" className={classes.card}>
                    {(() => {
                        if (image == null) {
                            return null
                        } else return (
                            <Card.Section>
                                <Image src={image} height={300} />
                            </Card.Section>
                        )
                    })()}

                    <CardSection>
                        <div className={`${color} h-6`}> </div>
                    </CardSection>
                    <CardSection>
                        <Text fz="xl" fw={600} className={classes.section}>
                            {name}
                        </Text>
                    </CardSection>
                    <Card.Section className={classes.section} mt="md">
                        <Group position="apart">
                            <Text fz="lg" fw={500}>
                                {title}
                            </Text>
                            {(() => {
                                if (logo == null) {
                                    return null
                                } else return <Image src={logo} height={50} width={50} />
                            })()}


                        </Group>
                        <Text fz="sm" mt="xs">
                            {description}
                        </Text>
                    </Card.Section>

                    <Card.Section className={classes.section}>

                        {/* <Group spacing={7} mt={5}>
                        {fieldEntries}
                    </Group> */}
                        <div className='mt-4'>
                            <FieldList data={fields} />
                        </div>
                    </Card.Section>

                    {/* <Group mt="xs">
                    <Button radius="md" style={{ flex: 1 }}>
                        Show details
                    </Button>
                    <ActionIcon variant="default" radius="md" size={36}>
                        <Heart size="1.1rem" className={classes.like} />
                    </ActionIcon>
                </Group> */}

                </Card>
            </div>
        </>
    );
}