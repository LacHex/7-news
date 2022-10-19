import { DefaultSeo } from 'next-seo'

const appName = '7 News'
const description = 'Technical challenge for SWM'
const handle = '@sevenwestmedia'

const config = {
  defaultTitle: appName,
  titleTemplate: `%s - ${appName}`,
  description,
  openGraph: {
    title: appName,
    description,
    type: 'website',
    locale: 'en_AU',
    url: 'https://sevenwestmedia.com.au',
    site_name: appName,
    images: [
      {
        url: '/images/open-graph/preview.png',
        width: 630,
        height: 320,
        alt: appName
      }
    ]
  },
  twitter: {
    handle,
    site: handle,
    cardType: 'summary_large_image'
  }
}

const metaTags = [
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, viewport-fit=cover'
  },
  {
    name: 'theme-color',
    content: '#121014'
  },
  {
    name: 'mobile-web-app-capable',
    content: 'yes'
  },
  {
    name: 'apple-mobile-web-app-title',
    content: description
  },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black'
  }
]

const linkTags = [
  {
    rel: 'manifest',
    href: '/manifest.json',
    key: 'app-manifest'
  },
  {
    rel: 'apple-touch-icon',
    href: '/images/icons/maskable-192x192.png'
  }
]

const Head = (): JSX.Element => {
  return (
    <>
      <DefaultSeo
        {...config}
        additionalMetaTags={metaTags}
        additionalLinkTags={linkTags}
      />
    </>
  )
}

export default Head
