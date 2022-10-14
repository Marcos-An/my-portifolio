import styles from './firstSection.module.scss'
import { Button } from '@components/molecules/Button'
import { useContext, useState } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import Image from 'next/image'
import { SliderProjects } from '@components/molecules/SlideProjects '
import projectsData from '@utils/projects.json'
import { ProjectCard } from '@components/molecules/ProjectCard'
import { ProjectType } from 'src/utils/types'
import { SocialIcons } from '@components/molecules/SocialIcons'

export function MainSection() {
  const [currentSlide, setcurrentSlide] = useState(1)
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  const { projects } = projectsData

  return (
    <div className={styles.container}>
      <a id="home" />
      {theme === 'light' ? (
        <div className={styles.titleLightContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/sun.png"
              alt="sun"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.titleLightWrapper}>
            <h1>Hello, I'm Marcos</h1>
            <h1>Welcome to my portfolio</h1>
          </div>
          <a href="#about">
            <Button>See More</Button>
          </a>
        </div>
      ) : (
        <div className={styles.titleDarkContainer}>
          <div className={styles.titleDarkWrapper}>
            <h1>WELCOME TO THE NIGHT</h1>
            <h1>IN MY PORTIFOLIO</h1>
          </div>
          <div className={styles.subtitleDarkWrapper}>
            <p>
              Hello, welcome to the portfolio of a senior frontend developer,
              enjoy this chaotic night, get to know a little about me and see my
              projects
            </p>
            <a href="#about">
              <Button>See More</Button>
            </a>
          </div>
        </div>
      )}
      <div className={styles.socialIcons}>
        <SocialIcons />
      </div>
      <div className={styles.slideWrapper}>
        <p>{projects[currentSlide - 1].about}</p>
        <div className={styles.slide}>
          <SliderProjects setcurrentSlide={setcurrentSlide}>
            {projects.map((project) => (
              <ProjectCard data={project as ProjectType} key={project.id} />
            ))}
          </SliderProjects>
        </div>
      </div>
    </div>
  )
}
