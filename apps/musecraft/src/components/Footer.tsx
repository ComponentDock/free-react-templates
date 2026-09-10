export function Footer() {
  return (
    <footer className="bg-navy py-16 text-center">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Musecraft. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-muted">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-mint"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
