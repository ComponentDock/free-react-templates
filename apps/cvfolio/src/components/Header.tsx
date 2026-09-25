import { MapPin, Phone, Mail, Download } from 'lucide-react'

export function Header() {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-brand-light px-6 py-4 sm:flex-row sm:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>123 Main St, New York, NY 10001</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>michel@example.com</span>
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-md border-2 border-white bg-transparent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand"
          download
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download CV
        </a>
      </div>
    </header>
  )
}
