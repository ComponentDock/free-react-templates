import { Phone, Mail } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const navLinks = ['Home', 'Cars', 'Blog', 'Pages']

export function Header() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-header-bar text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white"
            >
              <Phone size={14} />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:info@aeroworks.com"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white"
            >
              <Mail size={14} />
              <span>info@aeroworks.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
              <BrandIcon name="facebook" className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
              <BrandIcon name="x" className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <BrandIcon name="instagram" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="text-2xl font-bold text-primary-500">
            AeroWorks
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-semibold uppercase tracking-wide text-text-dark transition-colors hover:text-primary-500"
              >
                {link}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="rounded-[2px] bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Add Car
          </a>
        </div>
      </div>
    </header>
  )
}
