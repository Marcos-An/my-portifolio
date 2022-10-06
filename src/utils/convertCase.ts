export const toKebabCase = (title: string) => {
  const lowerCase = title.toLowerCase()

  return lowerCase.replace(' ', '-')
}
