import { Mail, Phone, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer data-testid="footer" className={cn('bg-ink text-white', className)}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-3 lg:px-8">
        {/* About */}
        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Reframe</h3>
          <p className="mb-4 text-sm leading-relaxed text-white/60">
            A professional construction company delivering quality projects on time and within
            budget.
          </p>
          <div className="space-y-3 text-sm text-white/60">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
              <span>34 Street Name, City Name, United States</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand-light" />
              <span>+1 242 4942 290</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-light" />
              <span>info@reframe.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-brand-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Social</h3>
          <div className="flex gap-4">
            {['Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-sm text-white/60 transition-colors hover:text-brand-light"
                aria-label={platform}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="underline transition-colors hover:text-brand-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
