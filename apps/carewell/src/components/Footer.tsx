export function Footer() {
  return (
    <footer className="bg-text-primary py-8">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} Carewell. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-white/50">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline transition-colors hover:text-white"
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
