import { Mail, Phone } from 'lucide-react'
import { FREE_QUOTE_LABEL, TOP_EMAIL, TOP_PHONE } from '../data'

/**
 * TopBar — dark-navy utility bar above the nav (source `div.header-top`, bg
 * #140C40, `d-none d-lg-block` → desktop only): phone + email on the left,
 * red "Free Quote" button on the right.
 */
export function TopBar() {
  return (
    <div className="hidden bg-ink text-white lg:block">
      <div className="mx-auto flex h-11 max-w-6xl items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-6 text-sm">
          <a
            href={`tel:${TOP_PHONE.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-brand"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {TOP_PHONE}
          </a>
          <a
            href={`mailto:${TOP_EMAIL}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-brand"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {TOP_EMAIL}
          </a>
        </div>
        <a
          href="#contact"
          className="bg-brand px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          {FREE_QUOTE_LABEL}
        </a>
      </div>
    </div>
  )
}
