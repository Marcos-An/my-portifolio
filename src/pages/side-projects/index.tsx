import styles from './sideProjects.module.scss'
import projectsData from '@utils/projects.json'
import { ProjectCard } from '@components/molecules/ProjectCard'
import { ProjectType } from '@utils/types'

export default function SideProjects() {
  const { projects } = projectsData

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>SIDE PROJECTS</h1>
        <h3>プロジェクト</h3>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            data={project as ProjectType}
            key={project.id}
            size="md"
          />
        ))}
      </div>
    </div>
  )
}
