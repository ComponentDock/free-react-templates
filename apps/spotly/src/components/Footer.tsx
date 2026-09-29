import { Compass } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-spotly-amber/10 bg-spotly-dark py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Compass className="mx-auto mb-3 h-6 w-6 text-spotly-amber/60" aria-hidden="true" />
        <p className="mb-1 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Spotly. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-spotly-amber underline decoration-spotly-amber/30 underline-offset-2 transition-colors hover:text-spotly-amber-hover"
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
