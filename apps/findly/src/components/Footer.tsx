import { Compass } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-findly-amber/10 bg-findly-dark py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Compass className="mx-auto mb-3 h-6 w-6 text-findly-amber/60" aria-hidden="true" />
        <p className="mb-1 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Findly. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-findly-amber underline decoration-findly-amber/30 underline-offset-2 transition-colors hover:text-findly-amber-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
