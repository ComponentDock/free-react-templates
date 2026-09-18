import { Phone, Mail } from 'lucide-react'

const links = [
  { label: 'Gift Card', href: '#' },
  { label: 'Track Order', href: '#' },
  { label: 'Contact Us', href: '#contact' },
]

export function TopBar() {
  return (
    <div className="bg-neutral-100 border-b border-neutral-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 sm:px-6">
        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3 w-3" aria-hidden="true" />
            +01 256 25 235
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-3 w-3" aria-hidden="true" />
            info@cartly.com
          </span>
        </div>
        <ul className="flex items-center gap-0 text-xs">
          {links.map((link, i) => (
            <li key={link.label} className="flex items-center">
              {i > 0 && <span className="mx-2 text-neutral-400">|</span>}
              <a
                href={link.href}
                className="text-neutral-500 uppercase tracking-wide hover:text-lime-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
