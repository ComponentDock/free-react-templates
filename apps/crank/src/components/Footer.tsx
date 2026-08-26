export function Footer() {
  return (
    <footer className="bg-page py-8">
      <p className="text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} Crank &mdash;{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-accent transition-colors hover:underline"
        >
          More templates at Component Dock
        </a>
      </p>
    </footer>
  )
}
