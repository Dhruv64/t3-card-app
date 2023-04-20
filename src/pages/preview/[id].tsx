import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import BadgeCard from "~/components/card";
import NotFound404 from "~/components/404";
import MadeWith from "~/components/made-with";

const CardPreviewPage: NextPage<{ id: string }> = ({ id }) => {
    const { data } = api.cards.getCardById.useQuery({
        id,
    });

    if (!data) return <NotFound404 />;
    else console.log(data)

    return (
        <>
            <Head>
                <title>
                    {data.card.name}'s card
                </title>
            </Head>
            <div className="py-4 flex justify-center">
                <BadgeCard image={data.card.imgUrl} name={data.card.name} title={data.card.title} logo={data.card.logoUrl} description={data.card.company} color={""} fields={data.fields} />
            </div>
            <div className="flex justify-center">
                <div>
                    <MadeWith />
                </div>
            </div>
        </>
    );
};

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

export default CardPreviewPage;