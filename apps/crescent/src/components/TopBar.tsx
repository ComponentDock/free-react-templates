import { Clock, Mail, Phone } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function TopBar() {
  return (
    <div className="bg-light-bg text-sm" data-testid="top-bar">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-1 text-muted-text transition-colors hover:text-brand"
          >
            <Clock className="h-3.5 w-3.5 text-brand" />
            <span>Opening Hours - 10 Am to 6 PM</span>
          </a>
          <div className="flex items-center gap-3 border-l-2 border-muted-text pl-5">
            <a
              href="#"
              className="text-muted-text transition-colors hover:text-brand"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              className="text-muted-text transition-colors hover:text-brand"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:info@componentdock.com"
            className="flex items-center gap-1 text-muted-text transition-colors hover:text-brand"
          >
            <Mail className="h-3.5 w-3.5 text-brand" />
            <span className="hidden sm:inline">info@componentdock.com</span>
          </a>
          <a
            href="tel:+12345678910"
            className="flex items-center gap-1 text-muted-text transition-colors hover:text-brand"
          >
            <Phone className="h-3.5 w-3.5 text-brand" />
            <span className="hidden sm:inline">+12 345 678 910</span>
          </a>
        </div>
      </div>
    </div>
  )
}
