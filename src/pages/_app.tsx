import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>LeapCode</title> {/* setting title of page for tab */}
        <meta name="description" content="Web application that contains leetcode problems and video solutions" /> {/* description of application */}
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* web requirements */}
        <link rel="icon" href="/logo.png" /> {/* uploads the leetcode symbol for top tab */}
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
