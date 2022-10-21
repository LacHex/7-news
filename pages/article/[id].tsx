import Image from 'next/image'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { useArticles } from '@lib/hooks'
import { calcTimeAgo } from '@lib/helpers'

const ArticlePage = (): JSX.Element => {
  const router = useRouter()
  const id = Number(router.query.id)
  const { isError, isLoading, article } = useArticles(id - 1)

  if (isError) {
    return renderFallback('Error fetching article!')
  }

  if (isLoading) {
    return renderFallback('Fetching article...', false)
  }

  if (!article) {
    return renderFallback("This article doesn't exist!")
  }

  const { headline, source, byline, publicationDate, blocks } = article

  const renderBlocks = (): Array<JSX.Element> => {
    return blocks.map((block, index) => {
      const { kind, text, intentions, captionText, url } = block
      const hasIntentions = intentions && intentions.length > 0

      const renderBlockContent = (): JSX.Element | undefined => {
        switch (kind) {
          case 'text':
            let formattedText = text

            if (text && hasIntentions) {
              // Iterate over the intentions and modify the text accordingly
              intentions.forEach((intention) => {
                const { kind, index: start, length } = intention
                const end = start + length
                const textToReplace = text.slice(start, end)

                // Add "em" and "strong" elements to the text
                if (kind === 'emphasized' || kind === 'important') {
                  const tag = kind === 'emphasized' ? 'em' : 'strong'
                  formattedText = formattedText?.replace(
                    textToReplace,
                    `<${tag}>${textToReplace}</${tag}>`
                  )
                }
              })
            }

            // Convert formatted text to JSX
            return (
              <p
                className="text-lg max-w-[760px] mb-4"
                dangerouslySetInnerHTML={{ __html: formattedText || '' }}
              />
            )

          case 'image':
            if (!url) return

            return (
              <div className="my-12 aspect-auto w-full">
                <Image
                  className="rounded-lg"
                  layout="responsive"
                  objectFit="cover"
                  width={1000}
                  height={562.5}
                  quality={50}
                  src={url}
                  alt={captionText}
                />
                <p className="text-md mt-4 ml-6">{captionText}</p>
              </div>
            )

          case 'pull-quote':
            return (
              <div className="border-primary border-l-8 pl-6 max-w-[660px] mx-6 md:mx-14 my-12 md:my-16 rounded-md">
                <blockquote className="text-3xl font-medium italic mb-3">
                  {text}
                </blockquote>
                <span className="text-sm">{byline}</span>
              </div>
            )
        }
      }

      return <Fragment key={index}>{renderBlockContent()}</Fragment>
    })
  }

  const timeAgo = calcTimeAgo(publicationDate)

  return (
    <main className="mt-16 mx-6 md:mx-10">
      <div className="grid place-content-center m-auto max-w-[min(1024px,_100vw_-_24px)] sm:max-w-[min(1024px,_100vw_-_80px)] min-h-screen py-16">
        <div className="mb-8">
          <div className="text-primary-text font-medium mb-1">
            {source} • {byline}
          </div>
          <div className="">{timeAgo}</div>
        </div>
        <h1 className="text-primary-text text-4xl sm:text-5xl md:text-6xl font-primary font-medium mb-14">
          {headline}
        </h1>

        {renderBlocks()}
      </div>
    </main>
  )
}

const renderFallback = (message: string, showEmoticon = true): JSX.Element => {
  return (
    <main className="mx-6 md:mx-10">
      <div className="grid place-content-center m-auto min-h-screen py-16 text-center">
        {showEmoticon && (
          <h1 className="text-primary-text text-8xl font-medium mt-16 mb-12">
            \(o_o)/
          </h1>
        )}
        <h2 className="text-2xl">{message}</h2>
      </div>
    </main>
  )
}

export default ArticlePage
