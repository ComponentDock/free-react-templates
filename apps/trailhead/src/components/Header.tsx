import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BrandIcon } from './BrandIcon'
import {
  brandName,
  inspirationLinks,
  menuCloseLabel,
  menuToggleLabel,
  navLinks,
  socialLabels,
  socialLinks,
} from '../data'

const sectionHref = (label: string): string => `#${label.toLowerCase()}`

export function Header() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  return (
    <header className="bg-white">
      {/* Row 1: bold logo left + social circles right + hamburger toggle */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-3 sm:px-6">
        <a href="#home" className="text-4xl font-black leading-none text-ink">
          {brandName}
        </a>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            {socialLinks.map((name) => (
              <a
                key={name}
                href="#home"
                aria-label={socialLabels[name]}
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-meta"
              >
                <BrandIcon name={name} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={menuToggleLabel}
            className="rounded p-2 text-ink xl:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Row 2: centered nav bar under a top border */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          aria-label="Primary"
          className="mt-4 hidden items-center justify-center gap-8 border-t border-soft pt-3 xl:flex"
        >
          {navLinks.map((label) => (
            <div key={label} className="relative">
              {label === 'Inspiration' ? (
                <>
                  <button
                    type="button"
                    onClick={() => setDropdown((value) => !value)}
                    aria-expanded={dropdown}
                    className="flex items-center gap-1 pb-1 text-[15px] font-bold text-ink transition-colors hover:text-primary"
                  >
                    {label}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {dropdown ? (
                    <div className="absolute left-0 top-full z-20 w-44 border-t-2 border-primary bg-white py-2 shadow-lg">
                      {inspirationLinks.map((sub) => (
                        <a
                          key={sub}
                          href={sectionHref(sub)}
                          onClick={() => setDropdown(false)}
                          className="block px-4 py-2 text-sm font-bold text-[#343a40] transition-colors hover:bg-soft hover:text-primary"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                <a
                  href={sectionHref(label)}
                  className={cn(
                    'pb-1 text-[15px] font-bold transition-colors hover:text-primary',
                    label === 'Homepage' ? 'text-primary' : 'text-ink',
                  )}
                >
                  {label}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={cn('fixed inset-0 z-50 bg-black/50 xl:hidden', open ? 'block' : 'hidden')}
        onClick={() => setOpen(false)}
      >
        <div
          role="dialog"
          aria-label="Mobile menu"
          className="absolute inset-y-0 left-0 w-72 max-w-[85%] overflow-y-auto bg-white p-6"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-ink">{brandName}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={menuCloseLabel}
              className="rounded p-1 text-ink"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-6">
            <ul className="space-y-1">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href={sectionHref(label)}
                    onClick={() => setOpen(false)}
                    className="block rounded px-3 py-2 text-[15px] font-bold text-ink hover:bg-soft hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
              {inspirationLinks.map((sub) => (
                <li key={sub}>
                  <a
                    href={sectionHref(sub)}
                    onClick={() => setOpen(false)}
                    className="block rounded px-6 py-2 text-sm font-bold text-[#343a40] hover:bg-soft hover:text-primary"
                  >
                    {sub}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 flex items-center gap-2 border-t border-soft pt-6">
            {socialLinks.map((name) => (
              <a
                key={name}
                href="#home"
                aria-label={socialLabels[name]}
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-meta"
              >
                <BrandIcon name={name} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
