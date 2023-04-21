import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import BadgeCard from "~/components/card";
import NotFound404 from "~/components/404";
import React from 'react';
import { QRCode, Tooltip } from 'antd';
import { ArrowBarToDown } from "tabler-icons-react";
import {
    Card,

    Button,
    createStyles,
    rem,
    CardSection,
} from '@mantine/core';


import {
    EmailShareButton,
    EmailIcon,
    FacebookMessengerShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import Email from "next-auth/providers/email";
import { useSession } from "next-auth/react";

const downloadQRCode = () => {
    const canvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
    if (canvas) {
        const url = canvas.toDataURL();
        const a = document.createElement('a');
        a.download = 'QRCode.png';
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
};

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
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));


const CardSharePage: NextPage<{ id: string }> = ({ id }) => {

    const { data } = api.cards.getCardById.useQuery({
        id,
    });
    const url = `localhost.3000/preview/${data?.card.id}`

    const { data: session } = useSession()

    if (!data) return <NotFound404 />;
    else console.log(data)

    const { classes } = useStyles()

    return (
        <>
            {(() => {
                if (session?.user.id == data.card.userId) {
                    return (
                        <>
                            <Head>
                                <title>
                                    {data.card.name}'s card
                                </title>
                            </Head>
                            <div className="md:py-4 flex justify-evenly">
                                <BadgeCard image={data.card.imgUrl} name={data.card.name} title={data.card.title} logo={data.card.logoUrl} description={data.card.company} color={""} fields={data.fields} />

                                <div>
                                    <Card withBorder radius="md" padding="lg" className={classes.card}>

                                        <CardSection className={classes.section}>
                                            <div id="myqrcode">
                                                <QRCode size={300} value={url} style={{ marginBottom: 16 }} className="p-10" />
                                                <Tooltip title="Download QR">
                                                    <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={downloadQRCode}>
                                                        <span>Download your Card's QR  &nbsp;&nbsp;</span>
                                                        <ArrowBarToDown />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </CardSection>
                                        <hr />
                                        <CardSection className={`text-center ${classes.section}`}>
                                            <span className="font-semibold ">social share</span>
                                            <CardSection className="mt-5 space-x-2">
                                                <WhatsappShareButton url={url} title="Visit my Card Genius card">
                                                    <WhatsappIcon round={true} size={40} />
                                                </WhatsappShareButton>
                                                <LinkedinShareButton url={url}>
                                                    <LinkedinIcon round={true} size={40} />
                                                </LinkedinShareButton >
                                                <EmailShareButton url={url} title="Visit my Card Genius card">
                                                    <EmailIcon round={true} size={40} />
                                                </EmailShareButton>
                                            </CardSection>
                                        </CardSection>
                                    </Card>
                                </div>
                            </div>
                        </>
                    )
                } else return null
            })()}
        </>
    );
};
// select id from card
export const getStaticProps: GetStaticProps = async (context) => {
    const ssg = generateSSGHelper();

    const id = context.params?.id;

    if (typeof id !== "string") throw new Error("no id");

    await ssg.cards.getCardById.prefetch({ id });

    return {
        props: {
            trpcState: ssg.dehydrate(),
            id,
        },
    };
};

export const getStaticPaths = () => {
    return { paths: [], fallback: "blocking" };
};

export default CardSharePage;