import { X } from 'lucide-react'

interface OffcanvasMenuProps {
  open: boolean
  onClose: () => void
}

const navLinks = ['Home', 'Gallery', 'Blog', 'About', 'Contact']
const socialLinks = ['Facebook', 'Twitter', 'Instagram']

export default function OffcanvasMenu({ open, onClose }: OffcanvasMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-dark-bg)] transition-opacity duration-500 ${
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-8 top-6 text-white transition-colors hover:text-[var(--color-brand)]"
        aria-label="Close menu"
      >
        <X className="h-7 w-7" />
      </button>

      <nav>
        <ul className="space-y-4 text-center">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-4xl font-bold text-white transition-colors hover:text-[var(--color-brand)] sm:text-5xl"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-8 left-0 w-full px-10">
        <div className="flex justify-center gap-4 text-sm text-white">
          {socialLinks.map((s) => (
            <a key={s} href="#" className="transition-colors hover:text-[var(--color-brand)]">
              {s}
            </a>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-[var(--color-muted-text)]">
          Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <a href="https://www.componentdock.com/" className="underline hover:text-white">
            Component Dock
          </a>
        </p>
      </div>
    </div>
  )
}
