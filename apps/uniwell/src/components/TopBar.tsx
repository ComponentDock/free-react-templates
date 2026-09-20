import { Phone, Mail } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-navy text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-6">
          <span className="font-medium">Have any questions?</span>
          <a
            href="tel:001-1234-88888"
            className="flex items-center gap-1.5 hover:text-primary-400 transition-colors"
            aria-label="Call us at 001-1234-88888"
          >
            <Phone size={14} />
            <span>001-1234-88888</span>
          </a>
          <a
            href="mailto:info@uniwell.edu"
            className="flex items-center gap-1.5 hover:text-primary-400 transition-colors"
            aria-label="Email us at info@uniwell.edu"
          >
            <Mail size={14} />
            <span>info@uniwell.edu</span>
          </a>
        </div>
        <a
          href="#register"
          className="rounded bg-white/10 px-4 py-1.5 text-sm font-medium hover:bg-white/20 transition-colors"
        >
          Register or Login
        </a>
      </div>
    </div>
  )
}
