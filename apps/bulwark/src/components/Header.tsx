import { useState } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Service', 'Team', 'Price', 'Blog', 'Contact']
const DROPDOWN = ['Blog Single', 'Elements']

function FbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function DrIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      {/* Top bar */}
      <div className="bg-heading text-sm text-body">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook">
              <FbIcon className="h-3.5 w-3.5 hover:text-brand" />
            </a>
            <a href="#" aria-label="Twitter">
              <TwIcon className="h-3.5 w-3.5 hover:text-brand" />
            </a>
            <a href="#" aria-label="Dribbble">
              <DrIcon className="h-3.5 w-3.5 hover:text-brand" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+11234567890"
              className="flex items-center gap-1 text-body hover:text-brand"
            >
              <Phone className="h-3 w-3" />
              <span>+1 (123) 456 7890</span>
            </a>
            <a href="#" className="text-body hover:text-brand">
              Register / Login
            </a>
          </div>
        </div>
      </div>
      {/* Nav bar */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="text-2xl font-bold text-heading">
            BULWARK
          </a>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <ul className="hidden items-center gap-6 text-sm font-medium text-heading md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
            <li className="group relative">
              <button className="flex items-center gap-1 hover:text-brand">
                Pages <ChevronDown className="h-3 w-3" />
              </button>
              <ul className="absolute left-0 top-full z-10 hidden w-40 border border-gray-200 bg-white py-2 shadow-md group-hover:block">
                {DROPDOWN.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block px-4 py-1 text-sm text-body hover:bg-brand hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        {open && (
          <ul className="flex flex-col gap-4 border-t border-gray-100 px-4 pb-4 text-sm font-medium text-heading md:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="block py-1 hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
            <li>
              <span className="block py-1 font-semibold">Pages</span>
              <ul className="pl-4">
                {DROPDOWN.map((item) => (
                  <li key={item}>
                    <a href="#" className="block py-1 text-body hover:text-brand">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
