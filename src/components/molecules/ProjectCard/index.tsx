import Image from 'next/image'
import styles from './card.module.scss'
import { ArrowIconCard } from '@components/atoms/ArrowIcons'
import { ProjectType } from 'src/utils/types'

interface CardHome {
  size?: 'sm' | 'md' | 'lg'
  data: ProjectType
}

function CardSM({ data }: { data: ProjectType }) {
  return (
    <div className={styles.smallImageContainer} id={'slide-item-sm'}>
      <div className={styles.smallContentWrapper}>
        <h3>{data.title}</h3>
        <span>
          Veja Agora <ArrowIconCard />
        </span>
      </div>
      <Image
        src={data.bannerUrl}
        alt={data.title}
        objectFit="cover"
        layout="fill"
      />
    </div>
  )
}

function CardMD({ data }: { data: ProjectType }) {
  return (
    <div className={styles.mediumImageContainer}>
      <div className={styles.mediumContentWrapper}>
        <h3>{data.title}</h3>
        <span>
          Veja Agora <ArrowIconCard />
        </span>
      </div>
      <Image src={data.bannerUrl} alt={data.title} layout="fill" />
    </div>
  )
}

function CardLG({ data }: { data: ProjectType }) {
  return (
    <div className={styles.largeImageContainer} id={'slide-item-lg'}>
      <div className={styles.largeContentWrapper}>
        <h3>{data.title}</h3>
        <span>
          Veja Agora <ArrowIconCard />
        </span>
      </div>
      <Image
        src={data.bannerUrl}
        alt={data.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}

export function ProjectCard({ data, size = 'sm' }: CardHome) {
  return (
    <>
      {size === 'sm' && <CardSM data={data} />}
      {size === 'md' && <CardMD data={data} />}
      {size === 'lg' && <CardLG data={data} />}
    </>
  )
}
