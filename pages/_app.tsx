import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import '@styles/globals.css'

const NewsApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}

export default NewsApp
