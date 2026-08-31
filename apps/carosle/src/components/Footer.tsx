export function Footer() {
  return (
    <footer className="bg-ink py-6 text-center text-sm text-gray-400 transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p>© {new Date().getFullYear()} Revolve. All rights reserved.</p>
        <p className="mt-2">
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline transition-colors hover:text-brand-dark"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
