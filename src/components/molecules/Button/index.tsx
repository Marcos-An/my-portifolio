import styles from './button.module.scss'
import { ArrowIconButton } from '@components/atoms/ArrowIcons'

interface props {
  children: React.ReactNode
  onClick?: Function
}
export function Button({ children, onClick }: props) {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      <div className={styles.block} />
      <span>{children}</span>
      <ArrowIconButton />
    </button>
  )
}
