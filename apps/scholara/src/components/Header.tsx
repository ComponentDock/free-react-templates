import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Programs', 'Blog', 'Contact']

/* Inline brand icons (removed from lucide-react) */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="relative z-50">
      {/* Top countdown bar */}
      <div className="bg-gray-900 py-3 text-center text-sm text-white">
        <p className="mb-2 font-bold uppercase tracking-wide">
          Ends Tomorrow: Join Teachable for $4,800 in bonus content
        </p>
        <div className="flex items-center justify-center gap-4 text-xs">
          <CountdownUnit value={40} label="Days" />
          <CountdownUnit value={18} label="Hours" />
          <CountdownUnit value={46} label="Minutes" />
          <CountdownUnit value={32} label="Seconds" />
        </div>
        <a
          href="#"
          className="mt-2 inline-block border border-white px-4 py-1 text-xs font-bold uppercase text-white transition-colors hover:bg-white hover:text-gray-900"
        >
          Learn More
        </a>
      </div>

      {/* Sticky nav */}
      <nav
        className={`left-0 right-0 top-0 z-40 transition-all ${
          scrolled ? 'fixed bg-white shadow-md' : 'absolute bg-white/95'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <a href="#" className="text-2xl font-black uppercase text-ink">
            Scholara
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-bold uppercase text-mist transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:0786753674" className="flex items-center gap-2 text-sm font-bold text-ink">
              <Phone size={14} />
              Call Us: 0 (78) 675 3674
            </a>
            <div className="flex items-center gap-3 text-mist">
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="#" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t bg-white px-4 pb-4 lg:hidden">
            <ul className="flex flex-col gap-3 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block py-2 text-sm font-bold uppercase text-ink"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a href="tel:0786753674" className="flex items-center gap-2 text-sm font-bold text-ink">
              <Phone size={14} />
              Call Us: 0 (78) 675 3674
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-lg font-bold">{value}</span>
      <span className="text-[10px] uppercase">{label}</span>
    </div>
  )
}
