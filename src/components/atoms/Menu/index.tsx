import styles from './menu.module.scss'
import { useState } from 'react'

export function Menu() {
  interface MenuItemType {
    title: string
    isSelected: boolean
  }

  const [menu, setMenu] = useState<MenuItemType[]>([
    {
      title: 'WELL COME',
      isSelected: true
    },
    {
      title: 'ABOUT',
      isSelected: false
    },
    {
      title: 'PROJECTS',
      isSelected: false
    },
    {
      title: 'CONTACT',
      isSelected: false
    }
  ])

  const handleMenu = (itemSelected: MenuItemType) => {
    const newMenu = menu.map((item) => {
      if (item.isSelected) {
        item.isSelected = false
      }

      if (itemSelected.title === item.title) {
        item.isSelected = true
      }

      return item
    })

    setMenu(newMenu)
  }

  return (
    <nav className={styles.menuContainer}>
      <ul className={styles.menuWrapper}>
        {menu.map((item, index) => (
          <li
            onClick={() => handleMenu(item)}
            key={index}
            className={
              item.isSelected ? styles.menuItemSelected : styles.menuItem
            }
          >
            <a href="#">{item.title}</a>
            <div
              className={item.isSelected ? styles.lineSelected : styles.line}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
