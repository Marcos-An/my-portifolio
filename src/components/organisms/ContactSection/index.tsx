import styles from './contactSection.module.scss'
import { ArrowUp } from 'phosphor-react'
import { SocialIcons } from '@components/molecules/SocialIcons'

export function ContactSection() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.circle} />
        <h1>GET IN TOUCH</h1>
      </div>
      <p>
        Now that you know a little about me and have seen some of my projects,
        let's talk, send me a message or email!
      </p>

      <SocialIcons />
      <a href="#home">
        <div className={styles.backToTop}>
          <ArrowUp />
        </div>
      </a>
    </div>
  )
}
