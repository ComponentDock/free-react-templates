import { Mail } from 'lucide-react'

const socialLinks = [
  { label: 'Pinterest', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export function HeaderBar() {
  return (
    <div className="bg-dark-bg text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <a
          href="#"
          className="flex items-center gap-2 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
        >
          <Mail size={14} />
          subscribe
        </a>
        <ul className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                className="text-white/70 transition-colors hover:text-white"
              >
                {link.label[0]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
