export function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-center text-sm text-gray-400">
      <div className="mx-auto max-w-6xl px-6">
        <p>
          &copy; {new Date().getFullYear()} Lattice. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand transition-colors hover:text-brand-dark"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
