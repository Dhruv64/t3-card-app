import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import ToasterProvider from "~/providers/ToasterProvider";
import { MantineProvider } from '@mantine/core';
import { api } from "~/utils/api";

//global icon import
const { library, config } = require('@fortawesome/fontawesome-svg-core');
import { faAt, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons'
library.add(faAt, faPhone, faMapPin)


import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
        <ToasterProvider />
      </MantineProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
