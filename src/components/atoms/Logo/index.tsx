import styles from './logo.module.scss'
import { useRouter } from 'next/router'

export function MyLogo() {
  const router = useRouter()

  return (
    <div className={styles.container} onClick={() => router.push('/')}>
      <div className={styles.circle} />
      <div className={styles.content}>
        <h4>MARCOS ANTONIO</h4>
        <h5>マルコス</h5>
      </div>
    </div>
  )
}
