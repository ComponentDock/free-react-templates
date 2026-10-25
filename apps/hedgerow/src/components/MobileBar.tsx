import { Phone } from 'lucide-react'
import { mobileBar, site } from '../content'

/** 69 px fixed bar below 1024 px: call chip plus the site-visit CTA. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white p-3 lg:hidden">
      <div className="flex items-center gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 py-3 text-sm font-semibold text-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          {mobileBar.call}
        </a>
        <a
          href="#contact"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary-600 py-3 text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
        >
          {mobileBar.book}
        </a>
      </div>
    </div>
  )
}
