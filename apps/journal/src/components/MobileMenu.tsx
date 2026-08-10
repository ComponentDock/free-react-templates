import { useState } from 'react'
import { ChevronDown, ChevronRight, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  categoryMenu,
  categoryMenuLabel,
  headerSocials,
  megamenu,
  megamenuLabel,
  menuCloseLabel,
  pagesMenu,
  pagesMenuLabel,
} from '../data'
import { BrandIcon } from './BrandIcon'

interface MobileMenuProps {
  onClose: () => void
}

const linkClasses =
  'block rounded px-3 py-2.5 text-sm uppercase tracking-wide transition-colors hover:bg-accent/10 hover:text-accent'
const toggleClasses =
  'flex w-full items-center justify-between rounded px-3 py-2.5 text-sm uppercase tracking-wide transition-colors hover:bg-accent/10 hover:text-accent'
const subLinkClasses =
  'block rounded px-3 py-2 text-sm uppercase tracking-wide text-body transition-colors hover:bg-accent/10 hover:text-accent'

/** Off-canvas accordion menu for small screens: every nav link with
 *  expandable Pages / Catagory / Megamenu sections and the social icons. */
export function MobileMenu({ onClose }: MobileMenuProps) {
  const [sectionOpen, setSectionOpen] = useState<string | null>(null)
  const [categoryOpen, setCategoryOpen] = useState<string | null>(null)

  const toggleSection = (name: string) =>
    setSectionOpen((current) => (current === name ? null : name))

  return (
    <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <nav
        aria-label="Mobile"
        className="absolute top-0 right-0 flex h-full w-72 flex-col overflow-y-auto bg-white p-6 shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={menuCloseLabel}
          className="mb-6 self-end rounded p-1 text-ink transition-colors hover:text-accent"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
        <ul className="space-y-1">
          <li>
            <a href="#top" onClick={onClose} className={cn(linkClasses, 'text-accent')}>
              Home
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => toggleSection('pages')}
              aria-expanded={sectionOpen === 'pages'}
              className={toggleClasses}
            >
              {pagesMenuLabel}
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  sectionOpen === 'pages' && 'rotate-180',
                )}
                aria-hidden="true"
              />
            </button>
            {sectionOpen === 'pages' ? (
              <ul className="mt-1 space-y-1 pl-4">
                {pagesMenu.map((item) => (
                  <li key={item}>
                    <a href="#top" onClick={onClose} className={subLinkClasses}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
          <li>
            <button
              type="button"
              onClick={() => toggleSection('category')}
              aria-expanded={sectionOpen === 'category'}
              className={toggleClasses}
            >
              {categoryMenuLabel}
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  sectionOpen === 'category' && 'rotate-180',
                )}
                aria-hidden="true"
              />
            </button>
            {sectionOpen === 'category' ? (
              <ul className="mt-1 space-y-1 pl-4">
                {categoryMenu.map((group) => (
                  <li key={group.label}>
                    <button
                      type="button"
                      onClick={() =>
                        setCategoryOpen((current) => (current === group.label ? null : group.label))
                      }
                      aria-expanded={categoryOpen === group.label}
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-sm uppercase tracking-wide text-body transition-colors hover:bg-accent/10 hover:text-accent"
                    >
                      {group.label}
                      <ChevronRight
                        className={cn(
                          'h-4 w-4 transition-transform',
                          categoryOpen === group.label && 'rotate-90',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {categoryOpen === group.label ? (
                      <ul className="mt-1 space-y-1 pl-4">
                        {group.items.map((item) => (
                          <li key={item}>
                            <a href="#top" onClick={onClose} className={subLinkClasses}>
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
          <li>
            <a href="#top" onClick={onClose} className={linkClasses}>
              About Us
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => toggleSection('megamenu')}
              aria-expanded={sectionOpen === 'megamenu'}
              className={toggleClasses}
            >
              {megamenuLabel}
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  sectionOpen === 'megamenu' && 'rotate-180',
                )}
                aria-hidden="true"
              />
            </button>
            {sectionOpen === 'megamenu' ? (
              <ul className="mt-1 space-y-1 pl-4">
                {megamenu.map((column) => (
                  <li key={column.headline}>
                    <p className="px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">
                      {column.headline}
                    </p>
                    {column.items.map((item) => (
                      <a
                        key={item}
                        href="#top"
                        onClick={onClose}
                        className="block rounded px-3 py-1.5 text-sm text-body transition-colors hover:bg-accent/10 hover:text-accent"
                      >
                        {item}
                      </a>
                    ))}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
          <li>
            <a href="#top" onClick={onClose} className={linkClasses}>
              Contact
            </a>
          </li>
          <li className="flex items-center gap-1 px-3 pt-3">
            {headerSocials.map((social) => (
              <BrandIcon
                key={social.name}
                name={social.name}
                label={social.label}
                className="p-2"
              />
            ))}
          </li>
        </ul>
      </nav>
    </div>
  )
}
