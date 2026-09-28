import { Search } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-searchnest-peach-end py-8 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <Search className="mx-auto mb-3 h-6 w-6 text-searchnest-text/50" aria-hidden="true" />
        <p className="mb-1 text-sm text-searchnest-text/60">
          &copy; {new Date().getFullYear()} Searchnest. All rights reserved.
        </p>
        <p className="text-sm text-searchnest-text/60">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold underline decoration-searchnest-text/30 underline-offset-2 transition-colors hover:text-searchnest-text"
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
