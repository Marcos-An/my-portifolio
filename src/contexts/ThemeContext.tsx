import { createContext, useState, ReactNode, useEffect } from 'react'

interface ThemeContextData {
  theme: 'light' | 'dark'
  handleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextData)

type ThemeContextProviderProps = {
  children: ReactNode
}

type themeType = 'light' | 'dark'

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<themeType>()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (!savedTheme) {
      localStorage.setItem('theme', 'light')
    }

    if (savedTheme) {
      setTheme(savedTheme as themeType)
    }
  }, [])

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }

    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
