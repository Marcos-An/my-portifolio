import styles from './button.module.scss'
import { ArrowIconButton } from '@components/atoms/ArrowIcons'

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className={styles.button}>
      <div className={styles.block} />
      <span>{children}</span>
      <ArrowIconButton />
    </button>
  )
}
