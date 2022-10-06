import styles from './contactSection.module.scss'
import {
  ArrowUp,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo
} from 'phosphor-react'

export function ContactSection() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.circle} />
        <h1>GET IN TOUCH</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        quis dolor vel lacus lacinia congue id ut nisl. Nulla facilisi.{' '}
      </p>

      <div className={styles.socialIcons}>
        <GithubLogo />
        <EnvelopeSimple />
        <LinkedinLogo />
      </div>

      <div className={styles.backToTop}>
        <ArrowUp />
      </div>
    </div>
  )
}
