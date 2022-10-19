import type { AppProps } from 'next/app'
import '@styles/globals.css'

const NewsApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default NewsApp
