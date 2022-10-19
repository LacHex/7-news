import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/HomePage.module.css'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Channel 7 News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.gradient}>Channel 7 News</span>
        </h1>
      </main>
    </>
  )
}

export default HomePage
