import { Globe, Mail, Phone } from 'lucide-react'
import { topBar } from '../data'

/* Thin blue utility bar above the nav: contact info left, account +
   language controls right (reference: .header-top-area). */
export function TopBar() {
  return (
    <div className="hidden bg-primary md:block" aria-label="Utility bar">
      <div className="mx-auto flex h-[50px] max-w-7xl items-center justify-between px-4 text-sm text-white">
        <div className="flex items-center">
          <a
            href="tel:+001123488888"
            className="flex items-center gap-2 border-r border-white/10 pr-4 hover:text-white/80"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            {topBar.phone}
          </a>
          <a
            href="mailto:info@example.com"
            className="flex items-center gap-2 px-4 hover:text-white/80"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            {topBar.email}
          </a>
        </div>
        <div className="flex items-center">
          <a href="#login" className="hover:text-white/80">
            {topBar.login}
          </a>
          <button
            type="button"
            className="ml-4 flex items-center gap-2 border-l border-white/10 pl-4 hover:text-white/80"
          >
            <Globe aria-hidden="true" className="h-4 w-4" />
            {topBar.language}
          </button>
        </div>
      </div>
    </div>
  )
}
