import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import BadgeCard from "~/components/card";
import NotFound404 from "~/components/404";

const CardPreviewPage: NextPage<{ id: string }> = ({ id }) => {
    const { data } = api.cards.getCardById.useQuery({
        id,
    });
    if (!data) return <NotFound404/>;
    else console.log(data)

    return (
        <>
        <Head>
            <title>
                {data.name}'s card
            </title>
        </Head>
            <div className="py-4 flex justify-center">
                <BadgeCard image={data.imgUrl} name={data.name} title={data.title} logo={data.logoUrl} description={data.company} color={""} fields={[]} />
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