export function Footer() {
  return (
    <footer className="bg-ink py-8 text-center">
      <p className="font-roboto-mono text-sm text-white/60">
        &copy; {new Date().getFullYear()} Cosmos. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors hover:text-primary/80"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
