export function Footer() {
  return (
    <footer className="bg-ink py-8 text-center text-sm text-gray-400 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p>
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand underline transition-colors hover:text-brand-dark"
          >
            Component Dock
          </a>
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Credence. All rights reserved.</p>
      </div>
    </footer>
  )
}
