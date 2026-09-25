export function Footer() {
  return (
    <footer className="py-8 bg-dark text-white text-center text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-white/70">
          &copy; {new Date().getFullYear()} Credentia. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
