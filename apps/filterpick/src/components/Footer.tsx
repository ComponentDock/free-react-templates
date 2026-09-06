export function Footer() {
  return (
    <footer className="border-t border-filterpick-border bg-filterpick-card py-6">
      <div className="mx-auto max-w-md px-4 text-center text-xs text-filterpick-text-muted">
        <p>
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-filterpick-checkmark hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
