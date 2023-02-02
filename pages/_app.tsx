import '../styles/globals.css'
import '../styles/font.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>)
}

export default MyApp