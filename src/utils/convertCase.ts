export const toKebabCase = (title: string) => {
  const lowerCase = title.toLowerCase()

  return lowerCase.replace(' ', '-')
}

export const toUpperCase = (title: string) => {
  const lowerCase = title.toUpperCase()

  return lowerCase.replace('-', ' ')
}
