import { FaReact, FaVuejs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTypescript } from 'react-icons/si'

export function TechIcons({ tech }: { tech: string }) {
  return (
    <>
      {tech === 'react' && <FaReact size={22} color={'#288CD4'} />}
      {tech === 'vue' && <FaVuejs size={22} color={'#42B983'} />}
      {tech === 'js' && <IoLogoJavascript size={23} color={'#FFB800'} />}
      {tech === 'ts' && (
        <SiTypescript size={20} color={'#288CD4'} style={{ marginTop: 2 }} />
      )}
    </>
  )
}
