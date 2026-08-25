import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-gradient-to-r from-[#454e6d] to-[#232f55] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-white">
          Crest
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 text-white">
            <Phone size={16} />
            <span className="text-sm">(80) 783 367-3904</span>
          </div>
          <button className="rounded-[5px] bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy">
            Get Free Consultant
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="bg-gradient-to-r from-[#454e6d] to-[#232f55] px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-left text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link}
              </button>
            ))}
            <div className="flex items-center gap-2 text-white">
              <Phone size={16} />
              <span className="text-sm">(80) 783 367-3904</span>
            </div>
            <button className="rounded-[5px] bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy">
              Get Free Consultant
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
