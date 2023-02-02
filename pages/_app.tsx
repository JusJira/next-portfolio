import '../styles/globals.css'
import '../styles/font.css'
import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
        <Component {...pageProps} />
    </React.StrictMode>)
}

export default MyApp