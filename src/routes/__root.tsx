import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Pre-paid metering platform for all your solar projects',
      },
      {
        name: 'description',
        content:
          'Switch has introduced the first smart meter designed for web3 solar projects. Our meters enable individuals to monetize solar power, which in turn helps decentralize energy grid, while ensuring their data is transparent, verifiable and secures',
      },
      {
        name: 'google-site-verification',
        content: '7Md7CnryEOcKgtedcz1Sm9ytVy_VZMDuVBJfS8D-JkU',
      },
      {
        name: 'author',
        content: 'Switch Electric',
      },
      {
        property: 'og:title',
        content: 'Switch Electric',
      },
      {
        property: 'og:description',
        content: 'Smart metering hardware provider',
      },
      {
        property: 'og:url',
        content: 'https://www.whynotswitch.com/',
      },
      {
        property: 'og:site_name',
        content: 'Switch Electric',
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'website',
      },
      {
        name: 'twitter:site',
        content: '@whynotswitch',
      },
      {
        name: 'twitter:creator',
        content: '@@whynotswitch',
      },
      {
        name: 'twitter:title',
        content: 'Switch Electric',
      },
      {
        name: 'twitter:description',
        content: 'Smart metering hardware provider',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&amp;family=JetBrains+Mono:wght@500;700&amp;family=Hanken+Grotesk:wght@600;700&amp;display=swap',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0',
        rel: 'stylesheet',
      },
      {
        rel: 'canonical',
        href: 'https://www.whynotswitch.com/',
      },
    ],
    scripts: [
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-ZVCXJTT66C',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
