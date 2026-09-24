import { Mail, MapPin } from 'lucide-react'

const socials = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Skype', href: '#' },
  { label: 'Vimeo', href: '#' },
]

export function TopBar() {
  return (
    <div className="border-b border-border bg-white text-xs text-body">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-4">
          <a
            href="mailto:medical@example.com"
            className="flex items-center gap-1 transition-colors hover:text-brand-500"
          >
            <Mail className="h-3.5 w-3.5" />
            medical@example.com
          </a>
          <span className="hidden items-center gap-1 sm:flex">
            <MapPin className="h-3.5 w-3.5" />
            Find our Location
          </span>
        </div>
        <ul className="flex items-center gap-3">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="text-body transition-colors hover:text-brand-500"
              >
                {label.charAt(0)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
