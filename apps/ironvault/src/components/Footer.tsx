import { BRAND } from '../data'

/**
 * Footer — slim centered copyright bar with a top border, the brand credit,
 * and the mandatory Component Dock link.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-line py-8 text-center">
      <p className="text-sm font-light text-body">
        Copyright © {year} All rights reserved | This template is made with ♥ by {BRAND}
      </p>
      <p className="mt-1 text-xs font-light text-body">
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-medium text-brand transition-colors hover:text-brand-dark"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
