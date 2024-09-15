import type { AppProps } from "next/app";
import type { DehydratedState } from "react-query";
import Layout from "../components/common/Layout";
import { AuthProvider } from "../components/context/auth";
import "../styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <AuthProvider>
      <Layout dehydratedState={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
