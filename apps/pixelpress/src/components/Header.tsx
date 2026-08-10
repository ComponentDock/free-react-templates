import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  closeMenuLabel,
  followUsLabel,
  gameSingleLabel,
  loginLabel,
  navItems,
  openMenuLabel,
  siteName,
  socialLabels,
  socials,
} from '../data'
import { BrandIcon } from './BrandIcon'

/** White top social row + dark-navy bar with logo, user panel and nav. */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileGamesOpen, setMobileGamesOpen] = useState(false)

  return (
    <header className="header-section bg-white">
      {/* Top row: "Follow us:" + social icons */}
      <div className="header-warp mx-auto flex max-w-[1496px] items-center justify-end gap-4 px-4 pt-3 pb-3">
        <p className="text-[16px] text-[#9190a5]">{followUsLabel}</p>
        <ul className="flex items-center">
          {socials.map((name) => (
            <li key={name}>
              <a
                href="#"
                aria-label={socialLabels[name]}
                className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#343045] text-white transition-colors hover:bg-magenta"
              >
                <BrandIcon name={name} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Navy bar: logo, user panel, menu */}
      <div className="header-bar-warp bg-navy px-4 pb-5 shadow-[0_0_9px_3px_rgba(226,30,228,0.24)] sm:px-10">
        <div className="mx-auto flex max-w-[1496px] flex-wrap items-center justify-between gap-4 pt-10">
          <a href="#" className="text-[34px] font-bold tracking-wide text-white uppercase">
            {siteName}
          </a>
          <a
            href="#"
            className="text-[16px] font-medium text-white transition-colors hover:text-magenta"
          >
            {loginLabel}
          </a>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="main-menu flex items-center justify-center gap-9">
            {navItems.map((item) => {
              const hasDropdown = item === 'Games'
              return (
                <li key={item} className="group relative py-4">
                  <a
                    href="#"
                    className={cn(
                      'relative py-4 text-[14px] font-bold tracking-wide text-white uppercase transition-colors hover:text-magenta-bright',
                      item === 'Home' &&
                        'after:absolute after:right-0 after:-bottom-0.5 after:h-0.5 after:w-5 after:bg-magenta',
                    )}
                  >
                    {item}
                  </a>
                  {hasDropdown && (
                    <ul className="invisible absolute top-full left-0 z-20 w-[220px] bg-navy opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                      <li>
                        <a
                          href="#"
                          className="block px-5 py-4 text-[14px] font-bold text-white uppercase transition-colors hover:text-magenta-bright"
                        >
                          {gameSingleLabel}
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center justify-between pt-2 lg:hidden">
          <button
            type="button"
            aria-label={mobileOpen ? closeMenuLabel : openMenuLabel}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-magenta"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <nav aria-label="Mobile" className="pb-4 lg:hidden">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item} className="border-t border-white/10">
                  {item === 'Games' ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={mobileGamesOpen}
                        onClick={() => setMobileGamesOpen((open) => !open)}
                        className="flex w-full items-center justify-between px-2 py-4 text-[14px] font-bold tracking-wide text-white uppercase"
                      >
                        {item}
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            mobileGamesOpen && 'rotate-180',
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {mobileGamesOpen && (
                        <ul className="bg-white/5">
                          <li>
                            <a
                              href="#"
                              className="block px-6 py-3 text-[14px] font-bold text-white/80 uppercase"
                            >
                              {gameSingleLabel}
                            </a>
                          </li>
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href="#"
                      className="block px-2 py-4 text-[14px] font-bold tracking-wide text-white uppercase transition-colors hover:text-magenta-bright"
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
