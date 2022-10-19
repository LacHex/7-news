import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <main className="grid place-content-center min-h-screen py-16">
      <h1 className="text-6xl font-medium">
        Welcome to{' '}
        <span className="text-transparent bg-clip-text text-red-600">
          7 News
        </span>
      </h1>
    </main>
  )
}

export default HomePage
