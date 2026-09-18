import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  SoundCloudIcon,
  VimeoIcon,
  YoutubeIcon,
  PlayIcon,
} from './BrandIcons'

const NAV_LINKS = ['Home', 'About', 'Episodes', 'Blog', 'Contact']

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'h-[70px] bg-overlay' : 'h-[86px] bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 text-heading">
          <span className="text-sm font-light">my</span>
          <span className="text-base font-bold">podcast</span>
          <PlayIcon className="ml-1 h-4 w-4 fill-brand" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-light text-heading transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden rounded-full border border-white px-5 py-2 text-xs font-medium text-heading transition-colors hover:bg-white hover:text-brand sm:inline-block"
          >
            Submit a Podcast
          </a>
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#" aria-label="Facebook" className="text-heading hover:text-brand">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="text-heading hover:text-brand">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="SoundCloud" className="text-heading hover:text-brand">
              <SoundCloudIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Vimeo" className="text-heading hover:text-brand">
              <VimeoIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="text-heading hover:text-brand">
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
          {/* Hamburger */}
          <button
            className="text-heading md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-dark p-6">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-right text-sm font-light text-heading transition-colors hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex justify-end gap-4">
            <a href="#" aria-label="Facebook" className="text-heading hover:text-brand">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="text-heading hover:text-brand">
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
