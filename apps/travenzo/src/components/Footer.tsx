export function Footer() {
  return (
    <footer className="bg-travenzo-card py-6 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-1 text-sm text-travenzo-muted">
          &copy; {new Date().getFullYear()} Travenzo. All rights reserved.
        </p>
        <p className="text-sm text-travenzo-muted">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-travenzo-text underline decoration-travenzo-muted underline-offset-2 transition-colors hover:text-travenzo-green"
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
