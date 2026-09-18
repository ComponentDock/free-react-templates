import { Phone, Mail, Clock } from 'lucide-react'

const socials = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
]

export function TopBar() {
  return (
    <section className="bg-brand text-white text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <ul className="flex flex-wrap items-center gap-4 text-sm">
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>+1 (168) 314 5016</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>info@constructo.com</span>
          </li>
          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>Mon - Sat 8:00 - 18:00</span>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                className="flex h-6 w-6 items-center justify-center rounded-full text-white transition-colors hover:bg-accent hover:text-brand"
              >
                <span className="sr-only">{s.label}</span>
                <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
