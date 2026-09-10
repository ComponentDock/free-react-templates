import { useState, useEffect } from 'react'
import { Menu, X, Briefcase } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'About', 'Blog', 'Pages', 'Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#"
          className={cn(
            'text-xl font-bold tracking-widest uppercase',
            scrolled ? 'text-lime-400' : 'text-white',
          )}
        >
          JobBoard
        </a>

        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={cn(
                'px-4 py-2 text-sm font-semibold transition-colors',
                scrolled ? 'text-gray-600 hover:text-lime-400' : 'text-white/60 hover:text-white',
              )}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#post-job"
            className="inline-flex items-center gap-2 bg-lime-400 text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-lime-500 transition-colors"
          >
            <Briefcase size={16} />
            Post a Job
          </a>
          <a
            href="#login"
            className={cn(
              'text-sm font-semibold',
              scrolled ? 'text-gray-600 hover:text-lime-400' : 'text-white/80 hover:text-white',
            )}
          >
            Log In
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn('lg:hidden p-2', scrolled ? 'text-gray-800' : 'text-white')}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg mt-2 mx-4 rounded-lg overflow-hidden">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-6 py-3 text-gray-700 hover:bg-lime-50 hover:text-lime-400 font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="border-t border-gray-100 mt-2 pt-2 px-6 pb-4 flex flex-col gap-3">
              <a
                href="#post-job"
                className="inline-flex items-center justify-center gap-2 bg-lime-400 text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-lime-500"
              >
                <Briefcase size={16} />
                Post a Job
              </a>
              <a href="#login" className="text-sm font-semibold text-gray-600 hover:text-lime-400">
                Log In
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
