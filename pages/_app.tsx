import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
  )
}
