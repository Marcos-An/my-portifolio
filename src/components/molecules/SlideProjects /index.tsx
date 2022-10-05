import styles from './slide.module.scss'
import { CaretRight } from 'phosphor-react'
import projectsData from '@utils/projects.json'

interface SliderProjectsTypes {
  width?: number
  currentSlide: number
  setcurrentSlide: Function
  children: React.ReactNode
}

export function SliderProjects({
  width = 334,
  currentSlide,
  setcurrentSlide,
  children
}: SliderProjectsTypes) {
  const { projects } = projectsData

  const scrollRight = () => {
    if (currentSlide === projects.length) {
      document.getElementById('slide').scrollBy(-100000, 0)
      setcurrentSlide(1)

      return
    }

    document.getElementById('slide').scrollBy(1, 0)
    setcurrentSlide((prev) => prev + 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowRight} onClick={scrollRight}>
        <CaretRight size={24} />
      </div>

      <div
        className={styles.slideContainer}
        style={{ width: width }}
        id={'slide'}
      >
        {children}
      </div>
    </div>
  )
}
