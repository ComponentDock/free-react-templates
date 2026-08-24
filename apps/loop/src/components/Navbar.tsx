import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface DropdownItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  href: string
  children?: DropdownItem[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Web Design', href: '#services' },
      { label: 'Graphic Design', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
    ],
  },
  { label: 'Pricing', href: '#stats' },
  { label: 'About', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label))
  }

  const linkClass = () => 'text-white transition-colors duration-200 hover:text-coral-400'

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-navy-900/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="font-display text-2xl font-bold text-coral-400">
          Loop
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                className={cn(
                  linkClass(),
                  'flex items-center gap-1 text-sm font-medium uppercase tracking-wide',
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </a>
              {item.children && (
                <ul className="invisible absolute top-full left-0 mt-2 w-48 rounded-lg border border-navy-700 bg-navy-800 py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-4 py-2 text-sm text-navy-200 transition-colors hover:bg-navy-700 hover:text-coral-400"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy-700 bg-navy-900 px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  className="block py-3 text-sm font-medium uppercase tracking-wide text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-label={`Toggle ${item.label} submenu`}
                    className="text-white"
                  >
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        openDropdown === item.label && 'rotate-180',
                      )}
                    />
                  </button>
                )}
              </div>
              {item.children && openDropdown === item.label && (
                <div className="pl-4">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block py-2 text-sm text-navy-300 hover:text-coral-400"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
