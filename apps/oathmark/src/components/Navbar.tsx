import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const practiceAreas = [
  { label: 'Bankruptcy Law', href: '#practice-areas' },
  { label: 'Business Law', href: '#practice-areas' },
  { label: 'Civil Rights Law', href: '#practice-areas' },
  { label: 'Criminal Law', href: '#practice-areas' },
  { label: 'Immigration Law', href: '#practice-areas' },
  { label: 'Family Law', href: '#practice-areas' },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Practice Areas', href: '#practice-areas', hasDropdown: true },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      className={cn('bg-white sticky top-0 z-50 shadow-sm', className)}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold font-heading text-gray-900">
            Oathmark
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} ref={dropdownRef} className="relative">
                  <button
                    className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-brand transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={16}
                      className={cn('transition-transform', isDropdownOpen && 'rotate-180')}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                      {practiceAreas.map((item) => (
                        <a
                          key={item.href + item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-bg-light hover:text-brand transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-brand transition-colors"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMobileOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-700 hover:text-brand"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={16}
                      className={cn('transition-transform', isDropdownOpen && 'rotate-180')}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-4">
                      {practiceAreas.map((item) => (
                        <a
                          key={item.href + item.label}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-brand"
                          onClick={() => {
                            setIsMobileOpen(false)
                            setIsDropdownOpen(false)
                          }}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-brand"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
