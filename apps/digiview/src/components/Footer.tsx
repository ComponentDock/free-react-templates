import { Mail, Phone, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const serviceLinks = ['Web Development', 'SEO Optimization', 'UI/UX Design', 'Digital Strategy']
const helpLinks = ['FAQ', 'Support', 'Documentation', 'Terms of Service']

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-darker pt-16 pb-8 text-gray-400', className)}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
        <div>
          <h4 className="mb-4 text-lg font-bold text-white">
            Digi<span className="text-brand">View</span>
          </h4>
          <p className="text-sm leading-relaxed">
            A full-service digital agency delivering innovative web solutions for businesses
            worldwide.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h4>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a href="#services" className="text-sm transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Help</h4>
          <ul className="space-y-2">
            {helpLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              123 Digital Avenue, Tech City, TC 10001
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 shrink-0 text-brand" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 shrink-0 text-brand" />
              hello@digiview.com
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-gray-800 px-4 pt-8 text-center text-xs md:px-8">
        <p>
          &copy; {new Date().getFullYear()} DigiView. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-brand hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
