export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-card py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <span className="text-sm font-semibold text-text-body">Cartwell</span>
          <p className="mt-1 text-xs text-text-muted">Cart Dropdown Menu</p>
        </div>
        <p className="text-xs text-text-muted">
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand hover:text-brand-hover"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
