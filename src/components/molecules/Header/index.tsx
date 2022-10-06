import { MyLogo } from '@components/atoms/Logo'
import { ThemeContext } from '@contexts/ThemeContext'
import { CloudMoon, SunHorizon } from 'phosphor-react'
import { useContext } from 'react'
import styles from './header.module.scss'

export function Header() {
  const themeContext = useContext(ThemeContext)
  const { theme, handleTheme } = themeContext
  return (
    <div className={styles.header}>
      <MyLogo />
      {theme === 'light' ? (
        <SunHorizon
          className={styles.themeHandler}
          onClick={handleTheme}
          weight="bold"
        />
      ) : (
        <CloudMoon
          className={styles.themeHandler}
          onClick={handleTheme}
          weight="bold"
        />
      )}
    </div>
  )
}
