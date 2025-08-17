import '../styles/globals.css'
import '../styles/main.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Feather icons after component mount
    if (typeof window !== 'undefined' && window.feather) {
      window.feather.replace()
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp