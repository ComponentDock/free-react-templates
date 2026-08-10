import { ArrowUp } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { socialLabels, socialLinks } from '../data'

export function ShareRail() {
  return (
    <aside
      aria-label="Share"
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center border border-gray-200 bg-white py-3 shadow-md md:flex dark:border-gray-800 dark:bg-gray-950"
    >
      {socialLinks.map((name) => (
        <a
          key={name}
          href="#home"
          aria-label={`Share on ${socialLabels[name]}`}
          className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-meta dark:text-gray-300 dark:hover:text-gray-500"
        >
          <BrandIcon name={name} className="h-4 w-4" />
        </a>
      ))}
      <a
        href="#home"
        aria-label="Back to top"
        className="mt-1 flex h-9 w-9 items-center justify-center border-t border-gray-200 text-ink transition-colors hover:text-meta dark:border-gray-800 dark:text-gray-300 dark:hover:text-gray-500"
      >
        <ArrowUp className="h-4 w-4" aria-hidden="true" />
      </a>
    </aside>
  )
}
