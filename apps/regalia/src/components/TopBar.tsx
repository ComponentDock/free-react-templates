import { Phone, Mail } from 'lucide-react'

const SOCIALS = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']

export function TopBar() {
  return (
    <div className="bg-bg-dark text-sm text-gray-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-accent-gold">
            <Phone size={13} />
            <span>+1 234 567 890</span>
          </a>
          <a
            href="mailto:info@regalia.com"
            className="flex items-center gap-1 hover:text-accent-gold"
          >
            <Mail size={13} />
            <span>info@regalia.com</span>
          </a>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {SOCIALS.map((name) => (
            <a
              key={name}
              href="#"
              aria-label={name}
              className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-gray-400 hover:bg-accent-gold hover:text-white"
            >
              {name[0]}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
