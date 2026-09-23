import { useState } from 'react'
import { Menu, X, Scale } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface HeaderProps {
  className?: string
}

const navLinks = ['Home', 'Practice Areas', 'Won Cases', 'Blog', 'About', 'Contact']

export function Header({ className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50 bg-hero-overlay shadow-sm', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white">
            <Scale size={24} aria-hidden="true" />
            Tribunal
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="text-sm text-white/80 hover:text-brand transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-hero-overlay border-t border-white/10">
          <nav className="px-4 py-4 space-y-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="block text-sm text-white/80 hover:text-brand py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
