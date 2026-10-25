import { Phone } from 'lucide-react'
import { contact, nav } from '../content'

/** Redrawn mark: a rounded square, a stem and the wordmark. Not a copied asset. */
export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2">
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
        <rect width="32" height="32" rx="8" className="fill-primary-600" />
        <path d="M11 8h7.2a4.8 4.8 0 0 1 0 9.6h-3.6V25H11z" fill="#ffffff" />
        <circle cx="22" cy="24" r="2.2" fill="#8e9ff8" />
      </svg>
      <span className="text-lg font-bold tracking-tight text-ink-800 dark:text-white">
        {nav.wordmark}
      </span>
    </span>
  )
}

/**
 * Sticky header with exactly two things in it: the wordmark and one call
 * action. There is no navigation in this design — not even a menu button.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 lg:h-18 lg:px-8">
        <a href="#top" aria-label={`${nav.wordmark} home`} className="shrink-0">
          <Wordmark />
        </a>

        <a
          href={contact.phoneHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none sm:px-5 sm:text-base"
        >
          <Phone aria-hidden="true" className="h-5 w-5" />
          <span className="hidden sm:inline">{contact.phone}</span>
          <span className="sm:hidden">{nav.shortCall}</span>
        </a>
      </div>
    </header>
  )
}
