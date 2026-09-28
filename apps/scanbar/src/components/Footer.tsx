import { Search } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-scanbar-navy py-8 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <Search className="mx-auto mb-3 h-6 w-6 text-white/70" aria-hidden="true" />
        <p className="mb-1 text-sm text-white/70">
          &copy; {new Date().getFullYear()} Scanbar. All rights reserved.
        </p>
        <p className="text-sm text-white/70">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold underline decoration-white/40 underline-offset-2 transition-colors hover:text-white"
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
