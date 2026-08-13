import { Heart } from 'lucide-react'
import { footer } from '../data'
import { BrandIcon } from './BrandIcon'

/** Footer (reference `.footer`): centered white band with three circular
 *  social icon links and the copyright line — the attribution links to
 *  Component Dock (mandatory template footer link). */
export function Footer() {
  return (
    <footer className="border-t border-border bg-paper py-5 text-center">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-5 flex items-center justify-center gap-3">
          {footer.socials.map((social) => (
            <a
              key={social.label}
              href="#home-section"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full p-3 text-ink transition-colors hover:bg-brand hover:text-paper"
            >
              <BrandIcon name={social.name} className="h-5 w-5" />
            </a>
          ))}
        </p>
        <p className="text-sm text-muted">
          Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <Heart className="inline h-4 w-4 text-brand" aria-hidden="true" /> at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-ink underline transition-colors hover:text-brand"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
