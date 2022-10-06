import { ProjectCard } from '@components/molecules/ProjectCard'
import styles from './thirdSection.module.scss'
import projectsData from '@utils/projects.json'
import { SliderProjects } from '@components/molecules/SlideProjects '
import { ProjectType } from '@utils/types'
import { Button } from '@components/molecules/Button'
import { useRouter } from 'next/router'

export function ProjectsSection() {
  const { projects } = projectsData
  const router = useRouter()

  return (
    <div className={styles.container}>
      <a id="side-projects" />
      <br />
      <h1>SIDE PROJECTS</h1>
      <h2>プロジェクト</h2>
      <div className={styles.slide}>
        <SliderProjects size="lg">
          {projects.map((project) => (
            <ProjectCard
              data={project as ProjectType}
              key={project.id}
              size="lg"
            />
          ))}
        </SliderProjects>
      </div>
      <br />
      <br />
      <Button onClick={() => router.push('/side-projects')}>Veja Todos</Button>
    </div>
  )
}
