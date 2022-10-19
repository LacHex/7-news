import type { AppProps } from 'next/app'
import { Head, Providers } from '@components/common'
import '@styles/global.css'

const NewsApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  )
}

export default NewsApp
