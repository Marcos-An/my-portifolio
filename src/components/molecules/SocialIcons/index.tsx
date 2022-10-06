import styles from './socialIcons.module.scss'
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from 'phosphor-react'

export function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <a target="_blank" href="https://github.com/Marcos-An">
        <GithubLogo />
      </a>
      <a href="mailto: marcos.silva.0556@gmail.com">
        <EnvelopeSimple />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/marcos-antonio-579370160/"
      >
        <LinkedinLogo />
      </a>
    </div>
  )
}
