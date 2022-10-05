import styles from './slide.module.scss'
import { CaretRight } from 'phosphor-react'
import { isInViewPort } from '@utils/isInViewPort'
interface SliderProjectsTypes {
  size?: 'sm' | 'lg'
  setcurrentSlide?: Function
  children: React.ReactNode
}

export function SliderProjects({
  size = 'sm',
  setcurrentSlide,
  children
}: SliderProjectsTypes) {
  const id = `slide-${size}`

  const scrollRight = () => {
    const items = document.querySelectorAll(`#slide-item-${size}`)
    const lastItem = items[items.length - 1] as HTMLElement

    const slide = document.getElementById(id)

    if (!slide) return

    if (isInViewPort(lastItem)) {
      slide.scrollBy(-100000, 0)
      size === 'sm' && setcurrentSlide(1)
      return
    }

    document.getElementById(id).scrollBy(20, 0)
    size === 'sm' && setcurrentSlide((prev) => prev + 1)
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowRight}
        onClick={scrollRight}
        style={size === 'sm' ? { width: '14.3%' } : { width: '4.3%' }}
      >
        <CaretRight size={24} />
      </div>

      <div
        className={styles.slideContainer}
        id={id}
        style={size === 'sm' ? { paddingRight: '15%' } : { paddingRight: '6%' }}
      >
        {children}
      </div>
    </div>
  )
}
