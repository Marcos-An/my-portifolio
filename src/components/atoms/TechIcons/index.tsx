import { FaReact, FaVuejs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import {
  SiTypescript,
  SiHasura,
  SiGraphql,
  SiPostgresql,
  SiPrisma,
  SiNodedotjs,
  SiHtml5,
  SiCss3
} from 'react-icons/si'

export function TechIcons({ tech }: { tech: string }) {
  return (
    <>
      {tech === 'react' && <FaReact size={22} color={'#288CD4'} />}
      {tech === 'react-native' && <FaReact size={22} color={'#288CD4'} />}
      {tech === 'vue' && <FaVuejs size={22} color={'#42B983'} />}
      {tech === 'javascript' && (
        <IoLogoJavascript size={23} color={'#FFB800'} />
      )}
      {tech === 'typescript' && (
        <SiTypescript size={20} color={'#288CD4'} style={{ marginTop: 2 }} />
      )}
      {tech === 'graphql' && <SiGraphql size={20} color={'#DE33A6'} />}
      {tech === 'hasura' && <SiHasura size={20} color={'#38B4D4'} />}
      {tech === 'postgres' && <SiPostgresql size={20} color={'#E2E6EA'} />}
      {tech === 'prisma' && <SiPrisma size={20} color={'#4C51BF'} />}
      {tech === 'node' && <SiNodedotjs size={20} color={'#8CBF3C'} />}
      {tech === 'html' && <SiHtml5 size={20} color={'#DC4B25'} />}
      {tech === 'css' && <SiCss3 size={20} color={'#254BDD'} />}
    </>
  )
}
