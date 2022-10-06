import styles from './project.module.scss'
import projectsData from '@utils/projects.json'
import { toKebabCase, toUpperCase } from '@utils/convertCase'
import Image from 'next/image'
import { Button } from '@components/molecules/Button'
import { TechIcons } from '@components/atoms/TechIcons'
import { SliderProjects } from '@components/molecules/SlideProjects '
import { ProjectType } from '@utils/types'
import { ProjectCard } from '@components/molecules/ProjectCard'
import { useEffect, useState } from 'react'
import { isInViewPort } from '@utils/isInViewPort'

export default function ProjectDetail({ project }) {
  const { title, bannerUrl, about, techs, id, github } = project
  const [projects, setProjects] = useState<ProjectType[]>([])

  useEffect(() => {
    const newProjects = projectsData.projects.filter((item) => {
      if (item.id === id) return
      return item
    })

    setProjects([...newProjects])
  }, [project])

  useEffect(() => {
    if (projects.length) {
      const items = document.querySelectorAll('#slide-item-sm')
      const lastItem = items[items.length - 1] as HTMLElement

      const slide = document.getElementById('slide-sm')

      if (isInViewPort(lastItem)) {
        slide.scrollBy(-100000, 0)
      } else {
        slide.scrollBy(20, 0)
      }
    }
  }, [projects])

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <h1>
            {title}
            <div className={styles.techs}>
              {techs.map((tech: string) => (
                <TechIcons tech={tech} key={tech} />
              ))}
            </div>
          </h1>
          <p>{about}</p>
          <a target="_blank" href={github}>
            <Button>Git Hub</Button>
          </a>
        </div>
        <div className={styles.slide}>
          <SliderProjects>
            {projects.map((project) => (
              <ProjectCard data={project as ProjectType} key={project.id} />
            ))}
          </SliderProjects>
        </div>
      </div>
      <Image src={bannerUrl} alt={title} objectFit="cover" layout="fill" />
    </div>
  )
}

export async function getStaticPaths() {
  const { projects } = projectsData

  const paths = projects.map((project) => {
    return { params: { project: toKebabCase(project.title) } }
  })

  return { paths: paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { projects } = projectsData
  const currentProjectTitle = toUpperCase(params.project)

  const project = projects.find((project) => {
    if (project.title === currentProjectTitle) {
      return project
    }
  })

  return { props: { project } }
}
