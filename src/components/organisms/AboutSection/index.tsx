import { TechIcons as Icons } from '@components/atoms/TechIcons'
import { Button } from '@components/molecules/Button'
import { ThemeContext } from '@contexts/ThemeContext'
import Image from 'next/image'
import { useContext } from 'react'
import styles from './secondSection.module.scss'

export function AboutSection() {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  const TechIcons = () => {
    return (
      <div className={styles.techWrapper}>
        <Icons tech="react" />
        <Icons tech="vue" />
        <Icons tech="javascript" />
        <Icons tech="typescript" />
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <a id="about" />
      {theme === 'light' ? (
        <div className={styles.lightContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={'/assets/images/profile-photo.png'}
              alt={'profile-photo'}
              layout="fill"
            />
          </div>

          <div className={styles.contentLightWrapper}>
            <h1>MARCOS ANTONIO</h1>
            <h3>FRONT END ENGENEER</h3>

            <p>
              I have been working for 5 years with JavaScript, TypeScript,
              ReactJS and their related ecosystem. I started my story as a
              frontend and my first job was at a marketing agency making website
              prototypes and developing with React, HTML, CSS and JS. With that
              I found my passion and I didn't stop evolving! Take a look at my
              projects and let's chat.
            </p>
            <div className={styles.buttonWrapper}>
              <a href="#side-projects">
                <Button>Meus Projetos</Button>
              </a>
              <TechIcons />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.darkContainer}>
          <div className={styles.imageLeft} />

          <div className={styles.contentDarkWrapper}>
            <h1>MARCOS ANTONIO</h1>
            <h3>FRONT END ENGENEER</h3>

            <p>
              I have been working for 5 years with JavaScript, TypeScript,
              ReactJS and their related ecosystem. I started my story as a
              frontend and my first job was at a marketing agency making website
              prototypes and developing with React, HTML, CSS and JS. With that
              I found my passion and I didn't stop evolving!
              <br />
              <br />
              Take a look at my projects and let's chat.
            </p>
            <div className={styles.buttonWrapper}>
              <a href="#side-projects">
                <Button>Meus Projetos</Button>
              </a>
              <TechIcons />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
