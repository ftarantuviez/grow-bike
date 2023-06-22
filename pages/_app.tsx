import Layout from "@/components/Layout/Layout";
import BikesProvider from "@/contexts/BikesContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DefaultSeo } from "next-seo";
import SEO from "@/next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BikesProvider>
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </BikesProvider>
    </LocalizationProvider>
  );
}
