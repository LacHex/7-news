/**
 * Calculates the time ago from now.
 *
 * @param date The date string to calculate from.
 *
 * @returns A string of how long ago the provided date was.
 */
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

export default calcTimeAgo
