import styles from './home.module.scss'
import { FirstSection } from '@components/organisms/FistSection'
import { Menu } from '@components/atoms/Menu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu />
      <FirstSection />
    </div>
  )
}
