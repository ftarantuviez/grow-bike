import Layout from "@/components/Layout/Layout";
import BikesProvider from "@/contexts/BikesContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BikesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BikesProvider>
  );
}
