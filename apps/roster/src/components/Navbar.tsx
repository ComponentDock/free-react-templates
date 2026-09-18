import { useState, useEffect } from 'react'
import { Button } from '@free-react-templates/ui'

export function Navbar() {
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['Home', 'Categories', 'Explore', 'Contact']

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <span
          className={`text-xl font-bold ${
            scrolled ? 'text-text-dark dark:text-white' : 'text-white'
          }`}
        >
          Roster
        </span>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-text-dark hover:text-brand dark:text-gray-300 dark:hover:text-brand'
                  : 'text-white/90 hover:text-brand'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className={`hidden text-sm font-medium transition-colors sm:inline ${
              scrolled
                ? 'text-text-dark hover:text-brand dark:text-gray-300'
                : 'text-white/90 hover:text-brand'
            }`}
          >
            Log in
          </a>
          <Button variant="primary" size="sm">
            Add Listing
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? '☀️' : '🌙'}
          </Button>
        </div>
      </div>
    </header>
  )
}
