import styles from './logo.module.scss'

export function MyLogo() {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.content}>
        <h4>MARCOS ANTONIO</h4>
        <h5>マルコス</h5>
      </div>
    </div>
  )
}
