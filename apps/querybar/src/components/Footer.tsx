import { Plane } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black/60 py-8 text-center backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6">
        <Plane className="mx-auto mb-3 h-6 w-6 text-white/50" aria-hidden="true" />
        <p className="mb-1 text-sm text-white/60">
          &copy; {new Date().getFullYear()} QueryBar. All rights reserved.
        </p>
        <p className="text-sm text-white/60">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
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
