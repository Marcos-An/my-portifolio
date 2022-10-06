import Image from 'next/image'
import styles from './card.module.scss'
import { ArrowIconCard } from '@components/atoms/ArrowIcons'
import { ProjectType } from 'src/utils/types'
import { CornersOut } from 'phosphor-react'
import { toKebabCase } from '@utils/convertCase'
import { useRouter } from 'next/router'
import Tilt from 'react-parallax-tilt'

interface CardHome {
  size?: 'sm' | 'md' | 'lg'
  data: ProjectType
}

const redirect = (title: string, router: any) => {
  const projectURL = toKebabCase(title)
  router.push(`/side-projects/${projectURL}`)
}

function CardSM({ data }: { data: ProjectType }) {
  const router = useRouter()

  return (
    <div
      className={styles.smallImageContainer}
      id={'slide-item-sm'}
      onClick={() => redirect(data.title, router)}
    >
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
  const router = useRouter()

  return (
    <Tilt tiltReverse={true} scale={1.05}>
      <div
        className={styles.mediumImageContainer}
        id={'slide-item-lg'}
        onClick={() => redirect(data.title, router)}
      >
        <div className={styles.cornersWrapper}>
          <CornersOut />
        </div>
        <div className={styles.mediumContentWrapper}>
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
    </Tilt>
  )
}

function CardLG({ data }: { data: ProjectType }) {
  const router = useRouter()
  return (
    <Tilt tiltReverse={true} tiltAxis={'y'}>
      <div
        className={styles.largeImageContainer}
        id={'slide-item-lg'}
        onClick={() => redirect(data.title, router)}
      >
        <div className={styles.cornersWrapper}>
          <CornersOut />
        </div>
        <div className={styles.largeContentWrapper}>
          <h3>{data.title}</h3>
        </div>
        <Image
          src={data.bannerUrl}
          alt={data.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Tilt>
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
