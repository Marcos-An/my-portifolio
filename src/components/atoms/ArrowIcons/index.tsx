import { useContext } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'

export function ArrowIconButton() {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  return (
    <svg
      width="30"
      height="11"
      viewBox="0 0 30 15"
      fill={theme === 'light' ? '#082546' : '#FFFFFF'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" />
    </svg>
  )
}

export function ArrowIconCard() {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  return (
    <svg
      width="30"
      height="9"
      viewBox="0 0 25 17"
      fill={theme === 'light' ? '#ebe4a5' : '#FFFFFF'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" />
    </svg>
  )
}
