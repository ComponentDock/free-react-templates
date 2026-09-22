import { Phone, Mail, Clock } from 'lucide-react'

const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'Twitter',
    href: '#',
    path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  },
]

export function TopBar() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs sm:px-6">
        <div className="flex items-center gap-4">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-1.5 hover:text-brand transition-colors"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>+1 234 567 890</span>
          </a>
          <a
            href="mailto:info@industrix.com"
            className="hidden items-center gap-1.5 hover:text-brand transition-colors sm:flex"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            <span>info@industrix.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 text-gray-400 md:flex">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Mon - Fri: 9:00 - 19:00
          </span>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-gray-400 hover:text-brand transition-colors"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
