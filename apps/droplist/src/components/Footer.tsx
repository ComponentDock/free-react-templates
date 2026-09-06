export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-text">Droplist</p>
          <p className="text-sm text-text-muted">Multi-section dropdown navigation template.</p>
        </div>
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
