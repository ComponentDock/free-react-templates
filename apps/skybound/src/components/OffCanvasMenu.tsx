import { useState } from 'react'
import { MENU_BLOG, MENU_CONTACT, MENU_LINKS, MENU_PAGES } from '../data/content'
import { CompassMark } from './icons'

type MenuGroup = 'pages' | 'blog'

export function OffCanvasMenu() {
  const [open, setOpen] = useState(false)
  const [group, setGroup] = useState<MenuGroup | null>(null)

  function closeMenu() {
    setOpen(false)
    setGroup(null)
  }

  function toggleGroup(next: MenuGroup) {
    setGroup((current) => (current === next ? null : next))
  }

  return (
    <div>
      <button
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-controls="skybound-menu"
        onClick={() => setOpen((value) => !value)}
        className="menu-toggle"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav id="skybound-menu" aria-label="Main" data-open={open} className="side-menu">
        <a
          href="#home"
          onClick={closeMenu}
          className="side-menu-link mb-10 flex items-center gap-3 text-2xl"
        >
          <CompassMark className="h-7 w-7 text-azure" />
          Skybound
        </a>

        <ul>
          {MENU_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu} className="side-menu-link">
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <button
              type="button"
              aria-expanded={group === 'pages'}
              onClick={() => toggleGroup('pages')}
              className="side-menu-link"
            >
              Pages
            </button>
            {group === 'pages' ? (
              <ul className="side-menu-sub">
                {MENU_PAGES.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={closeMenu}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>

          <li>
            <button
              type="button"
              aria-expanded={group === 'blog'}
              onClick={() => toggleGroup('blog')}
              className="side-menu-link"
            >
              Blog
            </button>
            {group === 'blog' ? (
              <ul className="side-menu-sub">
                {MENU_BLOG.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={closeMenu}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>

          <li>
            <a href={MENU_CONTACT.href} onClick={closeMenu} className="side-menu-link">
              {MENU_CONTACT.label}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
