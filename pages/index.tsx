import type { NextPage } from 'next'
import { ArticleCard } from '@components/ui'
import { useArticles } from '@lib/hooks'

const HomePage: NextPage = () => {
  const { isError, isLoading, articles } = useArticles()

  const renderContent = (): JSX.Element => {
    if (isError) {
      return renderFallback('Error fetching articles!')
    }

    if (isLoading) {
      return renderFallback('Fetching articles...', false)
    }

    if (!articles || articles.length === 0) {
      return renderFallback("Can't find any articles at this time!")
    }

    return (
      <>
        <h1 className="text-primary-text text-4xl font-primary font-medium mt-16 mb-4 sm:text-5xl md:text-6xl">
          Local news
        </h1>
        <h2 className="text-lg mb-8">Trending articles</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {articles.map((article, index) => (
            <ArticleCard key={index} id={index + 1} {...article} />
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      <main className="mx-6 md:mx-10">
        <div className="grid place-content-center m-auto min-h-screen max-w-[1280px] py-16">
          {renderContent()}
        </div>
      </main>
    </>
  )
}

const renderFallback = (message: string, showEmoticon = true): JSX.Element => {
  return (
    <>
      {showEmoticon && (
        <h1 className="text-primary-text text-8xl font-medium mt-16 mb-12 text-center">
          \(o_o)/
        </h1>
      )}
      <h2 className="text-2xl">{message}</h2>
    </>
  )
}

export default HomePage
