import { TechIcons as Icons } from '@components/atoms/TechIcons'
import { Button } from '@components/molecules/Button'
import { ThemeContext } from '@contexts/ThemeContext'
import Image from 'next/image'
import { useContext } from 'react'
import styles from './secondSection.module.scss'
import projectsData from '@utils/projects.json'

export function AboutSection() {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  const { projects } = projectsData

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque quis dolor vel lacus lacinia congue id ut nisl. Nulla
              facilisi. Cras mattis libero nec mi fringilla efficitur. Fusce
              lobortis euismod velit vel auctor.{' '}
            </p>
            <div className={styles.buttonLightWrapper}>
              <Button>Meus Projetos</Button>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque quis dolor vel lacus lacinia congue id ut nisl. Nulla
              facilisi. Cras mattis libero nec mi fringilla efficitur. Fusce
              lobortis euismod velit vel auctor
            </p>
            <div className={styles.buttonLightWrapper}>
              <Button>Meus Projetos</Button>
              <TechIcons />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
