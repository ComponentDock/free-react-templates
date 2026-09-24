import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pages', href: '#departments' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-brand-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white"
          >
            Medprime
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              className="bg-white text-brand-primary px-6 py-2.5 rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
              onClick={() => {
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book Appointment
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors px-2 py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-white text-brand-primary px-6 py-2.5 rounded font-semibold text-sm mt-2 w-full"
                onClick={() => {
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
                  setOpen(false)
                }}
              >
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
