import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-ink py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} Craftwork. All rights reserved. Made with{' '}
          <Heart size={14} className="mx-0.5 inline text-brand" aria-hidden="true" /> by John
          Craftwork.
        </p>
        <p className="mt-2 text-sm text-white/50">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand underline transition-colors hover:text-brand-dark"
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
