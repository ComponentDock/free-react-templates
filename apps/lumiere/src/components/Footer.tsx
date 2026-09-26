export function Footer() {
  return (
    <footer className="bg-dark py-8 text-center text-sm text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Lumiere. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors hover:text-brand-400"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
