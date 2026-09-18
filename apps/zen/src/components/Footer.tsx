import { Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-zen-gradient-from to-zen-gradient-to py-12 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <Sparkles className="mx-auto mb-4 h-8 w-8 text-white" aria-hidden="true" />
        <p className="mb-2 text-sm text-white/80">
          &copy; {new Date().getFullYear()} Zen Studio. All rights reserved.
        </p>
        <p className="text-sm text-white/80">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold underline decoration-white/50 underline-offset-2 transition-colors hover:text-white"
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
