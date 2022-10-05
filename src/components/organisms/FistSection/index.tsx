import styles from './firstSection.module.scss'
import { MyLogo } from '@components/atoms/Logo'
import { Button } from '@components/molecules/Button'
import {
  CloudMoon,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  SunHorizon
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import Image from 'next/image'
import { SliderProjects } from '@components/molecules/SlideProjects '
import projectsData from '@utils/projects.json'
import { CardHome } from '@components/molecules/ProjectCard'
import { ProjectType } from 'src/utils/types'

export function FirstSection() {
  const [currentSlide, setcurrentSlide] = useState(1)
  const themeContext = useContext(ThemeContext)
  const { theme, handleTheme } = themeContext

  const { projects } = projectsData

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <MyLogo />
        {theme === 'light' ? (
          <SunHorizon
            className={styles.themeHandler}
            onClick={handleTheme}
            weight="bold"
          />
        ) : (
          <CloudMoon
            className={styles.themeHandler}
            onClick={handleTheme}
            weight="bold"
          />
        )}
      </div>
      {theme === 'light' ? (
        <div className={styles.titleLightContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/Group 36.png"
              alt="sun"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.titleLightWrapper}>
            <h1>Olá, eu sou o Marcos</h1>
            <h1>Bem vindo ao meu portifólio</h1>
          </div>
          <Button />
        </div>
      ) : (
        <div className={styles.titleDarkContainer}>
          <div className={styles.titleDarkWrapper}>
            <h1>BEM VINDO A NOITE</h1>
            <h1>NO MEU PORTIFOLIO</h1>
          </div>
          <div className={styles.subtitleDarkWrapper}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque quis dolor vel lacus lacinia congue
            </p>

            <Button />
          </div>
        </div>
      )}

      <div className={styles.socialIcons}>
        <GithubLogo />
        <EnvelopeSimple />
        <LinkedinLogo />
      </div>

      <div className={styles.slideWrapper}>
        <p>{projects[currentSlide - 1].about}</p>
        <SliderProjects
          currentSlide={currentSlide}
          setcurrentSlide={setcurrentSlide}
        >
          {projects.map((project) => (
            <CardHome data={project as ProjectType} key={project.id} />
          ))}
        </SliderProjects>
      </div>
    </div>
  )
}
