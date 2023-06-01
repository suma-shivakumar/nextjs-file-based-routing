import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { NotiFicationContextProvider } from "../store/notification-context";
import Notification from "../components/ui/notification";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    // <NotiFicationContextProvider>
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <Component {...pageProps} />
      {/* <Notification title="Test" message="This is a test" status="pending" /> */}
    </Layout>
    // </NotiFicationContextProvider>
  );
}

export default MyApp;
