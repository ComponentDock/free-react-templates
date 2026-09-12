import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 bg-dark transition-all duration-300',
        isScrolled && 'shadow-lg',
      )}
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-script text-3xl text-white">
          Innovex
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={cn(
            'md:flex md:items-center md:gap-8',
            isOpen ? 'absolute left-0 top-full block w-full bg-dark p-4' : 'hidden',
          )}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
