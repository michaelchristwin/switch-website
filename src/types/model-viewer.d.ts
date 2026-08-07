import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        alt?: string
        src?: string
        ar?: boolean
        'environment-image'?: string
        poster?: string
        'shadow-intensity'?: string | number
        'camera-controls'?: boolean
        'touch-action'?: string
      }
    }
  }
}

export {}
