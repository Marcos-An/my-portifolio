import styles from './home.module.scss'
import { MainSection } from '@components/organisms/MainSection'
import { AboutSection } from '@components/organisms/AboutSection'
import { ProjectsSection } from '@components/organisms/ProjectsSection'
import { ContactSection } from '@components/organisms/ContactSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
