declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

interface Window { __RECAPTCHA_SITE_KEY?: string }
