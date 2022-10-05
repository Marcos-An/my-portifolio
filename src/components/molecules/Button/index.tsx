import styles from './button.module.scss'
import { ArrowIconButton } from '@components/atoms/ArrowIcons'

export function Button() {
  return (
    <button className={styles.button}>
      <div className={styles.block} />
      <span>Read More</span>
      <ArrowIconButton />
    </button>
  )
}
