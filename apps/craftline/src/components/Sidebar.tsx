import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <a href="#" className="text-text-muted hover:text-brand transition-colors" aria-label={label}>
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  )
}

const socialLinks = [
  {
    label: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Twitter',
    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    label: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
]

export function Sidebar() {
  const [dark, setDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleDark = () => {
    setDark((d) => {
      const next = !d
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="text-center pt-10 pb-6 px-6">
        <img
          src="https://picsum.photos/seed/craftline-profile/150/150"
          alt="Profile photo"
          className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-border mb-4"
        />
        <h1 className="text-xl font-bold text-text-primary mb-1">
          <a href="#home">Alex Morgan</a>
        </h1>
        <p className="text-sm text-brand">
          <a href="#about">UI/UX Designer</a>
          <br />
          in San Francisco
        </p>
      </div>

      <nav className="flex-1 px-6" aria-label="Main navigation">
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'block py-2 px-3 text-sm font-medium rounded-md transition-colors',
                  'hover:bg-brand-light hover:text-brand',
                  'text-text-secondary',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 py-4 border-t border-border">
        <button
          onClick={toggleDark}
          className="flex items-center gap-2 text-sm text-text-muted hover:text-brand transition-colors mb-4"
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          <span>{dark ? 'Light' : 'Dark'}</span>
        </button>

        <p className="text-xs text-text-muted mb-3">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>

        <div className="flex gap-3">
          {socialLinks.map((s) => (
            <SocialIcon key={s.label} label={s.label} path={s.path} />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-[10000] md:hidden bg-bg-secondary border border-border rounded-md p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        <div className="space-y-1.5">
          <span className="block w-5 h-0.5 bg-text-primary" />
          <span className="block w-5 h-0.5 bg-text-primary" />
          <span className="block w-5 h-0.5 bg-text-primary" />
        </div>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 w-[280px] h-screen bg-bg-secondary border-r border-border z-[1001] overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 w-[280px] h-screen bg-bg-secondary z-[9999] md:hidden overflow-y-auto transition-transform duration-300',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
