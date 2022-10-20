import Link from 'next/link'

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

const calcTimeAgo = (date: string): string => {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  )
  const years = Math.floor(seconds / 31536000)
  const months = Math.floor(seconds / 2592000)
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor(seconds / 60)

  return years > 0
    ? `${years} year${years > 1 ? 's' : ''} ago`
    : months > 0
    ? `${months} month${months > 1 ? 's' : ''} ago`
    : days > 0
    ? `${days} day${days > 1 ? 's' : ''} ago`
    : hours > 0
    ? `${hours} hour${hours > 1 ? 's' : ''} ago`
    : minutes > 0
    ? `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    : 'Just now'
}

export default ArticleCard
