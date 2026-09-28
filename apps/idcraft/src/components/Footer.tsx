export function Footer() {
  return (
    <footer className="bg-light-bg py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-gray-text">
          &copy; {new Date().getFullYear()} Idcraft. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
