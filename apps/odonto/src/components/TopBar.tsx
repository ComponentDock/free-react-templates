import { Phone, Mail, Clock } from 'lucide-react'

const socialLinks = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  {
    label: 'Twitter',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  { label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01' },
  {
    label: 'LinkedIn',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  },
]

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <a href="#" aria-label={label}>
      <svg
        className="w-4 h-4 hover:text-teal-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d={path} />
      </svg>
    </a>
  )
}

export function TopBar() {
  return (
    <div className="bg-teal-600 text-white text-sm py-2">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>(+1) 123 456 7890</span>
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>info@odonto.com</span>
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Mon - Fri 8:00 - 17:00</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <SocialIcon key={s.label} {...s} />
          ))}
        </div>
      </div>
    </div>
  )
}
