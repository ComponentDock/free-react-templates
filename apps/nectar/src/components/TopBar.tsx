import { Mail, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function TopBar() {
  return (
    <div className="bg-light py-2">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 sm:flex-row">
        <div className="flex items-center gap-4 text-sm text-body">
          <a
            href="mailto:info@nectar.com"
            className="flex items-center gap-1 transition-colors hover:text-brand"
            aria-label="Email info@nectar.com"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>info@nectar.com</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-1 transition-colors hover:text-brand"
            aria-label="Call +1 (234) 567 890"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>+1 (234) 567 890</span>
          </a>
        </div>
        <Button
          className="bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          aria-label="Request a quote"
        >
          Request A Quote
        </Button>
      </div>
    </div>
  )
}
