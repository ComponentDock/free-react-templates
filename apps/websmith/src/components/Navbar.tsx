import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home-section' },
  { label: 'About Us', href: '#about-section' },
  { label: 'What We Do', href: '#what-we-do-section' },
  { label: 'Portfolio', href: '#portfolio-section' },
  { label: 'Contact', href: '#contact-section' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home-section')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    const sectionIds = [
      'home-section',
      'about-section',
      'what-we-do-section',
      'portfolio-section',
      'contact-section',
    ]
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home-section" className="text-2xl font-bold text-brand">
          Websmith<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-brand'
                  : 'text-ink hover:text-brand'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((c) => !c)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex items-center gap-2 text-ink md:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
          <span className="text-xs font-bold uppercase">Menu</span>
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="fixed inset-0 top-0 z-50 flex flex-col bg-white pt-20 md:hidden"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-ink"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-col items-center gap-6 pt-12">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium uppercase tracking-wide ${
                  activeSection === link.href.replace('#', '') ? 'text-brand' : 'text-ink'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
