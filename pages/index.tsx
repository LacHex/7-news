import type { NextPage } from 'next'
import articles from 'content/articles.json'
import { ArticleCard } from '@components/ui'

interface Article {
  headline: string
  source: string
  byline: string
  publicationDate: string
  blocks: Array<{
    kind: 'text' | 'image' | 'pull-quote'
    text: string
    intentions?: Array<{
      kind: 'emphasized' | 'important'
      index: number
      length: number
    }>
  }>
}

const renderContent = (): JSX.Element => {
  return (
    <>
      <h1 className="text-primary-text text-4xl font-primary font-medium mt-16 mb-4 sm:text-5xl md:text-6xl">
        Local news
      </h1>
      <h2 className="text-lg mb-8">Trending articles</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {(articles as Array<Article>).map((article, index) => (
          <ArticleCard key={index} id={index + 1} {...article} />
        ))}
      </div>
    </>
  )
}

const renderFallback = (): JSX.Element => {
  return (
    <>
      <h1 className="text-primary-text text-8xl font-medium mt-16 mb-12 text-center">
        \(o_o)/
      </h1>
      <h2 className="text-2xl">
        Can{"'"}t find any articles, check back soon!
      </h2>
    </>
  )
}

const HomePage: NextPage = () => {
  const articlesExist = articles && articles.length > 0

  return (
    <>
      <main className="mx-6 md:mx-10">
        <div className="grid place-content-center m-auto max-w-[1280px] min-h-screen py-16">
          {articlesExist ? renderContent() : renderFallback()}
        </div>
      </main>
    </>
  )
}

export default HomePage
