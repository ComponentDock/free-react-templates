import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  categoryMenu,
  categoryMenuLabel,
  megamenu,
  megamenuLabel,
  navPlainLinks,
  pagesMenu,
  pagesMenuLabel,
} from '../data'

interface DesktopMenuProps {
  /** Sticky nav state: light link color on the white bar. */
  sticky: boolean
}

/** Desktop-only magazine menu: Home / Pages / Catagory / About Us /
 *  Megamenu / Contact with a Pages dropdown, a two-level Catagory menu and
 *  a four-column Megamenu. */
export function DesktopMenu({ sticky }: DesktopMenuProps) {
  const [menuOpen, setMenuOpen] = useState<string | null>(null)
  const [categoryOpen, setCategoryOpen] = useState<string | null>(null)

  const toggleMenu = (name: string) => setMenuOpen((current) => (current === name ? null : name))

  const linkClasses = cn(
    'inline-block px-2.5 py-2 text-[13px] uppercase tracking-wide transition-colors hover:text-accent',
    sticky ? 'text-body' : 'text-white',
  )

  return (
    <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
      {navPlainLinks.slice(0, 1).map((link) => (
        <li key={link}>
          <a
            href="#top"
            aria-current="page"
            className={cn(linkClasses, link === 'Home' && sticky && 'text-accent')}
          >
            {link}
          </a>
        </li>
      ))}

      <li className="relative">
        <button
          type="button"
          onClick={() => toggleMenu('pages')}
          aria-expanded={menuOpen === 'pages'}
          aria-haspopup="true"
          className={cn(linkClasses, 'flex items-center gap-1')}
        >
          {pagesMenuLabel}
          <ChevronDown
            className={cn('h-3.5 w-3.5 transition-transform', menuOpen === 'pages' && 'rotate-180')}
            aria-hidden="true"
          />
        </button>
        {menuOpen === 'pages' ? (
          <ul className="absolute top-full left-0 z-50 w-44 border border-line bg-white py-2 shadow-lg">
            {pagesMenu.map((item) => (
              <li key={item}>
                <a
                  href="#top"
                  className="block px-4 py-2 text-[13px] uppercase tracking-wide text-body transition-colors hover:text-accent"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </li>

      <li className="relative">
        <button
          type="button"
          onClick={() => toggleMenu('category')}
          aria-expanded={menuOpen === 'category'}
          aria-haspopup="true"
          className={cn(linkClasses, 'flex items-center gap-1')}
        >
          {categoryMenuLabel}
          <ChevronDown
            className={cn(
              'h-3.5 w-3.5 transition-transform',
              menuOpen === 'category' && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </button>
        {menuOpen === 'category' ? (
          <ul className="absolute top-full left-0 z-50 w-52 border border-line bg-white py-2 shadow-lg">
            {categoryMenu.map((group) => (
              <li key={group.label}>
                <button
                  type="button"
                  onClick={() =>
                    setCategoryOpen((current) => (current === group.label ? null : group.label))
                  }
                  aria-expanded={categoryOpen === group.label}
                  className="flex w-full items-center justify-between px-4 py-2 text-[13px] uppercase tracking-wide text-body transition-colors hover:text-accent"
                >
                  {group.label}
                  <ChevronRight
                    className={cn(
                      'h-3.5 w-3.5 transition-transform',
                      categoryOpen === group.label && 'rotate-90',
                    )}
                    aria-hidden="true"
                  />
                </button>
                {categoryOpen === group.label ? (
                  <ul className="pr-2 pb-2 pl-5">
                    {group.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#top"
                          className="block px-4 py-1.5 text-[13px] text-body transition-colors hover:text-accent"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </li>

      {navPlainLinks.slice(1, 2).map((link) => (
        <li key={link}>
          <a href="#top" className={linkClasses}>
            {link}
          </a>
        </li>
      ))}

      <li className="relative">
        <button
          type="button"
          onClick={() => toggleMenu('megamenu')}
          aria-expanded={menuOpen === 'megamenu'}
          aria-haspopup="true"
          className={cn(linkClasses, 'flex items-center gap-1')}
        >
          {megamenuLabel}
          <ChevronDown
            className={cn(
              'h-3.5 w-3.5 transition-transform',
              menuOpen === 'megamenu' && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </button>
        {menuOpen === 'megamenu' ? (
          <div className="absolute top-full left-1/2 z-50 w-[720px] -translate-x-1/2 border border-line bg-white p-6 shadow-lg">
            <div className="grid grid-cols-4 gap-6">
              {megamenu.map((column) => (
                <div key={column.headline}>
                  <h4 className="mb-3 text-[13px] font-bold uppercase tracking-wide text-ink">
                    {column.headline}
                  </h4>
                  <ul className="space-y-1.5">
                    {column.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#top"
                          className="text-[13px] text-body transition-colors hover:text-accent"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </li>

      {navPlainLinks.slice(2, 3).map((link) => (
        <li key={link}>
          <a href="#top" className={linkClasses}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  )
}
