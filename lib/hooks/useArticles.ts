import type { Fetcher } from 'swr'
import useSWR from 'swr'

interface Article {
  headline: string
  source: string
  byline: string
  publicationDate: string
  blocks: Array<{
    kind: 'text' | 'image' | 'pull-quote'
    text?: string
    url?: string
    captionText?: string
    intentions?: Array<{
      kind: 'emphasized' | 'important'
      index: number
      length: number
    }>
  }>
}

interface ArticlesHook {
  articles?: Array<Article>
  article?: Article
  isLoading: boolean
  isError?: boolean
}

const fetcher: Fetcher<string, string> = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

/**
 * Use articles from the static data file. If an article index is provided, the
 * article with that index will also be returned.
 *
 * @param index The index of the article to return.
 *
 * @returns An object with the states and articles data.
 */
const useArticles = (index?: number): ArticlesHook => {
  const { data, error: isError } = useSWR<string, boolean>(
    '/api/staticdata',
    fetcher
  )
  const articles = data ? (JSON.parse(data) as Array<Article>) : undefined
  const article = articles ? articles[index ?? 0] : undefined

  return {
    articles,
    article,
    isLoading: !isError && !data,
    isError
  }
}

export default useArticles
