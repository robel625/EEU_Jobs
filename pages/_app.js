import '../styles/globals.css'
import { ThemeProvider } from "next-themes"
import Layout from '../components/Layout'
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
        <RecoilRoot>
          <ThemeProvider attribute="class">
            <Layout>
              <Component {...pageProps} />
              </Layout>
          </ThemeProvider>
        </RecoilRoot>
    </SessionProvider>
  ) 
}

export default MyApp
