import Image from 'next/image'
import styles from './card.module.scss'
import { ArrowIconCard } from '@components/atoms/ArrowIcons'
import { ProjectType } from 'src/utils/types'

interface CardHome {
  data: ProjectType
}

export function CardHome({ data }: CardHome) {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.contentWrapper}>
        <h3>{data.title}</h3>
        <span>
          Veja Agora <ArrowIconCard />
        </span>
      </div>
      <Image src={data.bannerUrl} alt={'noemia'} layout="fill" />
    </div>
  )
}
