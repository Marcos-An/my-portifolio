export const isInViewPort = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()

  const isInViewport =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  return isInViewport
}
