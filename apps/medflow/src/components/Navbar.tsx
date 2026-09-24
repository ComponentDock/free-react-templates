import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-2xl font-bold font-[family-name:var(--font-heading)] text-brand-heading"
          >
            Medflow
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-body hover:text-brand-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-white px-6 py-2.5 rounded font-medium text-sm hover:opacity-90 transition-opacity"
              onClick={() => {
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book Appointment
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-brand-heading"
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
                  className="text-sm font-medium text-brand-body hover:text-brand-primary transition-colors px-2 py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-white px-6 py-2.5 rounded font-medium text-sm mt-2 w-full"
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
