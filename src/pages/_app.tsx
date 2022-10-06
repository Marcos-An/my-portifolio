import { Header } from '@components/molecules/Header'
import '../../styles/globals.css'
import { ThemeContextProvider } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
