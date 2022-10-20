import Link from 'next/link'
import { calcTimeAgo } from '@lib/helpers'

interface ArticleProps {
  id: number
  headline: string
  source: string
  byline: string
  publicationDate: string
}

const ArticleCard = ({
  id,
  headline,
  source,
  byline,
  publicationDate
}: ArticleProps): JSX.Element => {
  const href = `/article/${id.toString()}`
  const timeAgo = calcTimeAgo(publicationDate)

  return (
    <Link href={href} passHref>
      <a className="group flex flex-col font-medium select-none p-8 transition-[border-radius,_background-color] rounded-lg hover:rounded-md focus:rounded-md bg-surface-2 hover:bg-surface-4 focus:bg-surface-5 dark:bg-surface dark:hover:bg-surface-2 dark:focus:bg-surface-4">
        <div className="text-secondary-text text-sm mb-2">
          {source} • {byline}
        </div>
        <h3 className="text-primary-text text-2xl mb-4 transition-[color] group-hover:text-primary group-focus:text-primary">
          {headline}
        </h3>
        <div className="text-secondary-text text-sm">{timeAgo}</div>
      </a>
    </Link>
  )
}

export default ArticleCard
