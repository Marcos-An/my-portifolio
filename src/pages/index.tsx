import styles from './home.module.scss'
import { FirstSection } from '@components/organisms/FistSection'
import { Menu } from '@components/atoms/Menu'
import { SecondSection } from '@components/organisms/SecondSection'
import { ThirdSection } from '@components/organisms/ThirdSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  )
}
