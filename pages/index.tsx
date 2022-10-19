import type { NextPage } from 'next'
import styles from '@styles/HomePage.module.css'

const HomePage: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <span className={styles.gradient}>7 News</span>
      </h1>
    </main>
  )
}

export default HomePage
