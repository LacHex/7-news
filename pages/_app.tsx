import type { AppProps } from 'next/app'
import { Head, Providers } from '@components/common'
import { Header } from '@components/ui'
import '@styles/global.css'

const NewsApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head />
      <Providers>
        <Header />
        <Component {...pageProps} />
      </Providers>
    </>
  )
}

export default NewsApp
